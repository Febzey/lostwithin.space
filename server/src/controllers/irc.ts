import { FastifyPluginCallback } from "fastify";
import { randomBytes } from "crypto";
import db from "../database/pool.js";

type IRCUserRecord = {
    username: string;
    ip: string;
    createdAt: string;
};

const IRCController: FastifyPluginCallback = (server, opts, done) => {
    server.get("/getkey", async (request, reply) => {
        try {
            const { key } = request.query as { key?: string };

            if (key) {
                const [rows] = await db.query<IRCUserRecord[] | any>("SELECT * FROM irc_users WHERE `key` = ?", [key]);
                if (rows.length === 0) {
                    return reply.status(404).send({ error: "Key not found" });
                }
                return reply.send({ data: rows[0], exists: true });
            }

            const [rows] = await db.query<IRCUserRecord[] | any>("SELECT * FROM irc_users");
            reply.send(rows);
        } catch (error) {
            console.error("Error fetching key:", error);
            reply.status(500).send({ error: "Internal Server Error" });
        }
    });

    server.post("/keys", async (request, reply) => {
        try {
            const { username } = request.body as { username: string };
            if (!username) {
                return reply.status(400).send({ error: "Username is required" });
            }

            const [rows] = await db.query<IRCUserRecord[] | any>("SELECT * FROM irc_users WHERE username = ?", [username]);
            if (rows.length > 0) {
                return reply.status(400).send({ error: "Username already exists" });
            }

            // Generate a random key
            const newKey = randomBytes(16).toString("hex");
            const ip = request.ip;
            const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' '); // Convert to MySQL DATETIME format

            await db.query("INSERT INTO irc_users (`key`, username, ip, createdAt) VALUES (?, ?, ?, ?)", [newKey, username, ip, createdAt]);

            console.log(`New key generated for ${username} at ${createdAt}`);

            reply.send({ key: newKey, username, ip, createdAt });
        } catch (error) {
            console.error("Error creating key:", error);
            reply.status(500).send({ error: "Internal Server Error" });
        }
    });

    done();
};

export default IRCController;
