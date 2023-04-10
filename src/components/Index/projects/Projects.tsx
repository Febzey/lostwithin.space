import { useState } from 'react';
import { FaLink } from "react-icons/fa";

import express from '../../../images/technologies/express.svg';
import git from '../../../images/technologies/git.svg';
import javascript from '../../../images/technologies/javascript.svg';
import mysql from '../../../images/technologies/mysql.svg';
import node from '../../../images/technologies/node.svg';
import react from '../../../images/technologies/react.svg';
import tailwind from '../../../images/technologies/tailwind.svg';
import typescript from '../../../images/technologies/typescript.svg';
import html from '../../../images/technologies/html.svg';
import vscode from '../../../images/technologies/vscode.svg';
import fastify from '../../../images/technologies/fastify.svg'
import vite from '../../../images/technologies/vite.svg';
import nginx from '../../../images/technologies/nginx.svg';
import go from '../../../images/technologies/go.svg';
import next from '../../../images/technologies/next.svg';


const ProjectsCard = () => {
    const [projects] = useState([
        {
            title: "Scriber",
            description: "A blog post app with an ai helper, optimizing in SEO and SSR techniques, built with next and typescript.",
            github: "https://github.com/febzey/scriber",
            stack: [typescript, react, next, vscode, html, tailwind, node, git, mysql],
        },
        {
            title: "gotime",
            description: "A minimal parser, formalizer and manipulator for time durations and dates in nodejs.",
            github: "https://github.com/Febzey/gotime",
            stack: [go, git, vscode],
        },
        {
            title: "React Boilerplate",
            description: "An easy to use, beginner friendly react/fastify backend boilerplate.",
            github: "https://github.com/febzey/rf-boiler",
            stack: [react, typescript, node, git, vscode],
        },
        {
            title: "MySQL Parser",
            description: "A web based SQL tool to perform database queries via user interface and restful API.",
            github: "https://github.com/febzey/mysql-parser",
            stack: [typescript, node, mysql, git, vscode],

        },
        {
            title: "www.eusurvival.com",
            description: "A React web app made for a European based Minecraft server called eusurvival.com",
            github: "https://github.com/febzey/eusurvival.com",
            stack: [javascript, express, react, tailwind, nginx, vite, git, vscode],
        },
        {
            title: "ForestBot",
            description: "Chinese Spy Bot for block game. Tracks many statistics. Has fully custom built data api, Discord Bot and web app.",
            github: "https://github.com/ForestB0T",
            stack: [typescript, node, fastify, mysql, git, nginx, vscode, go],
        },
        {
            title: "QuickEncrypt",
            description: "A nodejs package used for quickly and easily encrypting strings using common encryption algorithms.",
            github: "https://github.com/febzey/quickencrypt",
            stack: [node, typescript],

        },
        {
            title: "Snapur",
            description: "An easy image hosting service with compression and serialization, made with next and golang.",
            github: "https://github.com/febzey/snapur",
            stack: [typescript, react, next, vscode, html, tailwind, node, git, mysql],
        },
    ])

    return (
        <div className="mt-[10%] w-full lg:w-2/3 mx-auto items-center justify-center min-h-screen z-30 flex flex-col p-4 mb-40">
            <div className="mr-auto ml-3 flex gap-1 flex-col">
                <h2 className="text-3xl uppercase">Projects</h2>
                <p className="text-neutral-300">a collection of projects/work I've done in the past.</p>
            </div>
            <ul className="flex flex-col gap-10 w-full mx-auto">
                {projects.map((project, index) => (
                    <li key={index} className="flex flex-row items-center justify-start border-b-[1px] border-b-zinc-600 py-60">
                       
                        <div className="flex flex-col w-3/4 gap-4">
                            <div className="">
                                <h4 className="text-white font-bakbak text-xl uppercase">{project.title}</h4>
                                <p className="text-neutral-100 font-poppins">{project.description}</p>
                            </div>
                            <div className=" flex flex-row items-center justify-start gap-2 flex-wrap">
                                {
                                    project.stack.map((img, index) => (
                                        <img src={img} alt={"technology"} width={40} className="p-2 bg-zinc-800 rounded-full" />
                                    ))
                                }
                            </div>
                        </div>

                        <a href={project.github} target="_blank" className="ml-auto mb-4 lg:mr-4 mr-1 text-3xl duration-150 hover:text-white/50">
                            <FaLink />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProjectsCard;