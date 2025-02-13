// import 'dotenv/config'
// import fastify       from 'fastify';
// import path          from 'path';
// import fastifyStatic from 'fastify-static';

// const server = fastify({ logger: false });

// console.log(__dirname)
// const webPath = path.join(__dirname, '../../dist'); 
// const options = {
//     root: webPath,
//     prefix: "/*"
// }

// server.register(fastifyStatic, options);

// server.setNotFoundHandler((request, reply) => {
//     return reply.send({ Error: "Page not found."})
// });


// (async () => {
//     try {
//         await server.listen(4100)
//         console.log(`Server listening on port 4100`)
//     } catch (err) {
//         server.log.error(err);
//         process.exit(1)
//     }
// })();

import fastify from 'fastify';
import fs from 'fs';
import path from 'path';
import cors from '@fastify/cors';

const server = fastify({ logger: false });
const viewsFilePath = path.join(__dirname, 'views.json');

// Middleware to enable CORS
server.register(cors, {
    origin: true,
    methods: ['GET', 'POST'],
});

// Helper function to read views from JSON file
const readViews = () => {
    if (!fs.existsSync(viewsFilePath)) {
        fs.writeFileSync(viewsFilePath, JSON.stringify({}));
    }
    const data = fs.readFileSync(viewsFilePath, 'utf-8');
    return JSON.parse(data);
};

// Helper function to write views to JSON file
const writeViews = (views: Record<string, number>) => {
    fs.writeFileSync(viewsFilePath, JSON.stringify(views, null, 2));
};

// Route to get view count by ID
server.get('/views', async (request, reply) => {
    console.log("Err")
    const { id } = request.query as { id: string };
    const views = readViews();
    const viewCount = views[id] || 0;
    reply.send({ view_count: viewCount });
});

// Route to increment view count by ID
server.post('/views', async (request, reply) => {
    const { id } = request.body as { id: string };
    const views = readViews();
    views[id] = (views[id] || 0) + 1;
    writeViews(views);
    reply.send({ view_count: views[id] });
});

// Start the server
const start = async () => {
    try {
        server.listen({ port: 3000 });
        console.log('Server is running on http://localhost:3000');
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

start();
