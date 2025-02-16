import { FastifyInstance } from "fastify";

export default async function catApi(server: FastifyInstance) {
  server.get("/", async (req, reply) => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await response.json();
      const catData = data[0];

      // Check if the request likely comes from an embed scraper (Discord's crawler usually sends Accept: text/html)
      const acceptHeader = req.headers.accept || "";
      const query = req.query as { embed?: string };
      if (acceptHeader.includes("text/html") || query.embed === "true") {
        // Serve an HTML page with proper OG meta tags, without redirecting
        reply.type("text/html").send(`
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta property="og:title" content="Cute Cat Image" />
              <meta property="og:description" content="Enjoy this adorable cat image!" />
              <meta property="og:image" content="${catData.url}" />
              <meta property="og:type" content="website" />
              <title>Cute Cat Image</title>
              <style>
            body, html {
              margin: 0;
              padding: 0;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color:black;
            }
            img {
              max-width: 100%;
              max-height: 100%;
            }
              </style>
            </head>
            <body>
              <img src="${catData.url}" alt="Cute Cat" />
            </body>
          </html>
        `);
      } else {
        // For non-HTML requests (e.g. direct browser image loads), return the raw image
        const imageResponse = await fetch(catData.url);
        const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());
        reply.type("image/jpeg").send(imageBuffer);
      }
    } catch (error) {
      reply.status(500).send({ error: "Failed to fetch cat image" });
    }
  });
}
