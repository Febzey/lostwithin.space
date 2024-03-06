import 'dotenv/config'
import fastify       from 'fastify';
import path          from 'path';
import fastifyStatic from 'fastify-static';

const server = fastify({ logger: false });

console.log(__dirname)
const webPath = path.join(__dirname, '../../dist'); 
const options = {
    root: webPath,
    prefix: "/*"
}

server.register(fastifyStatic, options);

server.setNotFoundHandler((request, reply) => {
    return reply.send({ Error: "Page not found."})
});


(async () => {
    try {
        await server.listen(4100)
        console.log(`Server listening on port 4100`)
    } catch (err) {
        server.log.error(err);
        process.exit(1)
    }
})();

