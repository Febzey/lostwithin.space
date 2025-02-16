import { FastifyInstance } from "fastify";

export default async function catApi(server: FastifyInstance) {
    server.get("/", async (req, reply) => {
        try {

            // Check if the request is from Discord's crawler
            const ua = req.headers["user-agent"] || "";
            // If the request comes from Discordbot and doesn't already have a timestamp parameter...
            if (ua.includes("Discordbot") && !(req.query as { t?: string }).t) {
                // Append a unique query parameter (e.g. current timestamp) to force a new URL
                const separator = req.url.includes("?") ? "&" : "?";
                const newUrl = req.url + separator + "t=" + Date.now();
                // Redirect Discordbot to the new URL
                reply.redirect(newUrl);
                return;
            }

            
            const response = await fetch("https://api.thecatapi.com/v1/images/search");
            const data = await response.json();
            const catData = data[0];

            // Generate a random short hash
            const randomHash = Math.random().toString(36).substring(7);
            const imageResponse = await fetch(catData.url + `?hash=${randomHash}`);
            const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());
            reply.type("image/jpeg").send(imageBuffer);
        } catch (error) {
            reply.status(500).send({ error: "Failed to fetch cat image" });
        }
    });
}
