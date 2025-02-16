import { FastifyInstance } from "fastify";

export default async function catApi(server: FastifyInstance) {
    server.get("/", async (req, reply) => {
        try {
            const response = await fetch("https://api.thecatapi.com/v1/images/search");
            const data = await response.json();
            const catData = data[0];

            // Generate a random short hash
            const randomHash = Math.random().toString(36).substring(7);

            // Check if the request likely comes from an embed scraper (Discord's crawler usually sends Accept: text/html)
            reply.type("text/html").send(`
                <!DOCTYPE html>
                <html>
                    <head>
                        <meta charset="utf-8">
                        <meta property="og:title" content="Cute Cat Image" />
                        <meta property="og:description" content="Enjoy this adorable cat image!" />
                        <meta property="og:image" content="${catData.url}?${randomHash}" />
                        <meta property="og:type" content="website" />
                        <meta property="og:url" content="${req.protocol}://${req.hostname}${req.url}" />
                        <title>Cute Cat Image</title>
                        <style>
                            body, html {
                                margin: 0;
                                padding: 0;
                                height: 100%;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                background-color: black;
                            }
                            img {
                                max-width: 100%;
                                max-height: 100%;
                            }
                        </style>
                    </head>
                    <body>
                        <img src="${catData.url}?${randomHash}" alt="Cute Cat" />
                    </body>
                </html>
            `);
        } catch (error) {
            reply.status(500).send({ error: "Failed to fetch cat image" });
        }
    });
}
