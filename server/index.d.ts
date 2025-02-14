import { FastifyRequest, FastifyReply } from "fastify";

interface IController {
    url: string;
    method: string;
    protected: boolean;
    run: (req: FastifyRequest, res: FastifyReply) => void;
}
