import { FastifyPluginCallback } from "fastify";
import { randomBytes } from "crypto";
import db from "../database/pool.js";

type URLRecord = {
    originalUrl: string;
    shortenedUrl: string;
    ip: string;
    createdAt: string;
};

const URLShortenerController: FastifyPluginCallback = (server, opts, done) => {
    server.post("/shorten", async (request, reply) => {
        try {
            const { originalUrl } = request.body as { originalUrl: string };
            if (!originalUrl) {
                return reply.status(400).send({ error: "Original URL is required" });
            }

            const shortenedUrl = `https://lostwithin.space/${randomBytes(3).toString("hex")}`;
            const ip = request.ip;
            const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' '); // Convert to MySQL DATETIME format

            await db.query("INSERT INTO url_shortener (originalUrl, shortenedUrl, ip, createdAt) VALUES (?, ?, ?, ?)", [originalUrl, shortenedUrl, ip, createdAt]);

            console.log(`URL shortened: ${originalUrl} -> ${shortenedUrl}`);

            reply.send({ originalUrl, shortenedUrl, ip, createdAt });
        } catch (error) {
            console.error("Error shortening URL:", error);
            reply.status(500).send({ error: "Internal Server Error" });
        }
    });

    server.get("/:shortenedUrl", async (request, reply) => {
        try {
            const { shortenedUrl } = request.params as { shortenedUrl: string };
            const [rows] = await db.query<URLRecord[] | any>("SELECT * FROM url_shortener WHERE shortenedUrl = ?", [`${request.protocol}://${request.hostname}/${shortenedUrl}`]);

            if (rows.length === 0) {
                return reply.status(404).send({ error: "Shortened URL not found" });
            }

            reply.redirect(rows[0].originalUrl);
        } catch (error) {
            console.error("Error fetching shortened URL:", error);
            reply.status(500).send({ error: "Internal Server Error" });
        }
    });

    done();
};

export default URLShortenerController;

