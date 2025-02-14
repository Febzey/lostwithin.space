import fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import websocket from "@fastify/websocket";
import viewsController from "../controllers/viewsController.js";
import IRC from "../services/IRC/irc.js";
import IRCController from "../controllers/irc.js";
import URLShortenerController from "../controllers/urlShortener.js";
import fastifyStatic from '@fastify/static';
import "dotenv/config"
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * Where we keep the fastify instance and the server configuration,
 * we also dispatch routes from here and organize our server.
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class Api {
    private server: FastifyInstance;
    private irc: IRC;

    constructor() {
        this.server = fastify({ logger: false });
        this.server.register(cors, { origin: true, methods: ["GET", "POST"] });
        this.server.register(websocket);
        this.irc = new IRC(this.server);
        console.log(path.join(__dirname, '/../../client/dist'))
        this.server.register(fastifyStatic, {
            root: path.join(__dirname, '/../../client/dist'),
            prefix: '/', // Serves the React app at the root
        });

        this.server.register(viewsController, {
            prefix: "/views",
        });

        this.server.register(IRCController, {
            prefix: "/irc",
        });

        this.server.register(URLShortenerController, {
            prefix: "/u",
        });

        this.server.setNotFoundHandler((request, reply) => {
            reply.sendFile('index.html');
        });

        //this.irc.initialize(this.server);
    }

    public async start() {
        try {
            await this.server.listen({ port: Number(process.env.port) });
            console.log("Server is running on http://localhost:", process.env.port);
        } catch (err) {
            console.log(err, "err")
            this.server.log.error(err);
            process.exit(1);
        }
    }
}