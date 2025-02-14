import { FastifyInstance } from "fastify";
import type { WebSocket } from "@fastify/websocket";
//import { db } from "../../Index.js"; 
import db from "../../database/pool.js";

type IRCUserRecord = {
    username: string;
    ip: string;
    createdAt: string;
};

type UserInfo = {
    username: string;
    ip: string;
    key: string;
    client: "website" | "app" | "discord" | "mc";
};

type MessageRecord = {
    username: string;
    message: string;
};

export default class IRC {
    private messageCache: MessageRecord[] = [];
    users: Map<WebSocket, UserInfo>;

    constructor(server: FastifyInstance) {
        this.users = new Map();

        server.register((instance, opts, done) => {
            instance.get("/irc", { websocket: true }, (connection) => {
                this.addConnection(connection);
            });
            done();
        });
    }

    private async checkIrcUserExists(key: string): Promise<IRCUserRecord | null> {
        const [rows] = await db.query<any[]>("SELECT * FROM irc_users WHERE `key` = ?", [key]);
        if (rows.length > 0) {
            return rows[0];
        }
        return null;
    }

    private addConnection(connection: WebSocket) {
        console.log("connection opened");
        console.log(this.users)
        connection.on("message", (raw) => {
            this.handleMessage(raw.toString(), connection);
        });

        connection.on("close", () => {
            this.users.delete(connection);
            this.broadcastUsers();
        });
    }

    private handleMessage(rawData: string, connection: WebSocket) {
        const data = JSON.parse(rawData);
        switch (data.type) {
            case "validate":
                if (data.key && data.client) {
                    this.checkIrcUserExists(data.key).then((user) => {
                        if (user) {
                            this.users.set(connection, { username: user.username, ip: user.ip, key: data.key, client: data.client });
                            this.broadcastUsers();
                            connection.send(JSON.stringify({
                                type: "chat-history",
                                history: this.messageCache.slice(Math.max(this.messageCache.length - 20, 0))
                            }));
                        }
                    });
                } else {
                    connection.send(JSON.stringify({ type: "error", message: "No key or client provided" }));
                    connection.close();
                }
                break;
            case "message":
                const userInfo = this.users.get(connection);
                if (userInfo) {
                    this.broadcastMessage(userInfo.username, data.message);
                }
                break;
            default:
                break;
        }
    }

    private broadcastMessage(username: string, message: string) {
        const messageRecord = { username, message };
        this.messageCache.push(messageRecord);
        if (this.messageCache.length > 100) {
            this.messageCache.shift();
        }
        for (const connection of this.users.keys()) {
            connection.send(JSON.stringify({ type: "message", ...messageRecord }));
        }
    }

    private broadcastUsers() {
        const users = Array.from(this.users.values()).map(user => ({ username: user.username, client: user.client }));
        for (const connection of this.users.keys()) {
            connection.send(JSON.stringify({ type: "users", users }));
        }
    }
}