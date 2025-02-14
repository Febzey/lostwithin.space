import { FastifyPluginCallback } from "fastify";
import db from "../database/pool.js";

const viewsController: FastifyPluginCallback = (server, opts, done) => {
    server.get("/", async (request, reply) => {
        try {
            const { id } = request.query as { id: string };
            const [rows] = await db.query<any[]>("SELECT view_count FROM views WHERE id = ?", [id]);
            const viewCount = rows.length > 0 ? rows[0].view_count : 0;
            reply.send({ view_count: viewCount });
        } catch (error) {
            console.error("Error fetching view count:", error);
            reply.status(500).send({ error: "Internal Server Error" });
        }
    });

    server.post("/", async (request, reply) => {
        try {
            const { id } = request.body as { id: string };
            const [rows] = await db.query<any[]>("SELECT view_count FROM views WHERE id = ?", [id]);
            let viewCount = 0;
            if (rows.length > 0) {
                viewCount = rows[0].view_count + 1;
                await db.query("UPDATE views SET view_count = ? WHERE id = ?", [viewCount, id]);
            } else {
                viewCount = 1;
                await db.query("INSERT INTO views (id, view_count) VALUES (?, ?)", [id, viewCount]);
            }
            reply.send({ view_count: viewCount });
        } catch (error) {
            console.error("Error updating view count:", error);
            reply.status(500).send({ error: "Internal Server Error" });
        }
    });

    done();
};

export default viewsController;
