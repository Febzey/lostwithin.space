import { useState } from 'react';
import { FaArrowLeft, FaLink } from "react-icons/fa";

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

import eusurvival_pic from "../../../images/projects/eusurvival.png"
import gotime_pic from "../../../images/projects/gotime.png"
import parser_pic from "../../../images/projects/parser.png"
import quickencrypt_pic from "../../../images/projects/quickencrypt.png"
import scriber from "../../../images/projects/scriber.png"
import snapur from "../../../images/projects/snapur.png"
import genweb from "../../../images/projects/Genweb.png"
import { Link } from 'react-router-dom';




const ProjectsCard = () => {
    const [projects] = useState([
        {
            title: "Scriber",
            description: "A blog post app with an ai helper, optimizing in SEO and SSR techniques, built with next and typescript.",
            github: "https://github.com/febzey/scriber",
            stack: [typescript, react, next, vscode, html, tailwind, node, git, mysql],
            def: "/ˈskraɪbər/",
            image: scriber,
            date: "April 7th, 2020",
        },
        {
            title: "gotime",
            description: "A minimal parser, formalizer and manipulator for time durations and dates in nodejs.",
            github: "https://github.com/Febzey/gotime",
            stack: [go, git, vscode],
            def: "",
            image: gotime_pic,
            date: "December 19th, 2021",
        },
        {
            title: "React Boilerplate",
            description: "An easy to use, beginner friendly react/fastify backend boilerplate.",
            github: "https://github.com/febzey/rf-boiler",
            stack: [react, typescript, node, git, vscode],
            def: "",
            date: "May 3rd, 2019",
        },
        {
            title: "MySQL Parser",
            description: "A web based SQL tool to perform database queries via user interface and restful API.",
            github: "https://github.com/febzey/mysql-parser",
            stack: [typescript, node, mysql, git, vscode],
            def: "",
            image: parser_pic,
            date: "June 16th, 2020",

        },
        {
            title: "www.eusurvival.com",
            description: "A React web app made for a European based Minecraft server called eusurvival.com",
            github: "https://github.com/febzey/eusurvival.com",
            stack: [javascript, express, react, tailwind, nginx, vite, git, vscode],
            def: "",
            image: eusurvival_pic,
            date: "September 25th, 2020",
        },
        {
            title: "ForestBot",
            description: "Chinese Spy Bot for block game. Tracks many statistics. Has fully custom built data api, Discord Bot and web app.",
            github: "https://github.com/ForestB0T",
            stack: [typescript, node, fastify, mysql, git, nginx, vscode, go],
            def: "",
            date: "January 21st, 2020",
        },
        {
            title: "QuickEncrypt",
            description: "A nodejs package used for quickly and easily encrypting strings using common encryption algorithms.",
            github: "https://github.com/febzey/quickencrypt",
            stack: [node, typescript],
            def: "",
            image: quickencrypt_pic,
            date: "November 8th, 2021",

        },
        {
            title: "Snapur",
            description: "An easy image hosting service with compression and serialization, made with next and golang.",
            github: "https://github.com/febzey/snapur",
            stack: [typescript, react, next, vscode, html, tailwind, node, git, mysql, go],
            def: "",
            image: snapur,
            date: "June 11th, 2021",
        },
        {
            title: "Genweb",
            description: "Web service created for the intent of targeting small and local business to help grow their online Prescence",
            github: "https://github.com/febzey/genweb",
            stack: [next, vscode, html, tailwind, node, git, mysql, typescript, react],
            def: "",
            image: genweb,
            date: "August 1st, 2020",
        },
        {
            title: "Portfolio",
            description: "This website.",
            github: "https://github.com/febzey/snapur",
            stack: [html, tailwind, react, next, node, git, mysql, typescript, vscode],
            def: "",
            date: "March 5th 2021",
        },
    ])

    return (
        <div className="w-full ">
            <Link to={"/"} className="flex flex-row gap-2 items-center underline-offset-4 duration-150 hover:text-neutral-500">
                <FaArrowLeft />
                Home
            </Link>
            <div className="mr-auto flex gap-1 flex-col mt-24">
                <h2 className="text-3xl uppercase">Projects</h2>
                <p className="text-neutral-300">a collection of projects/work I've done in the past.</p>
                <p className="text-neutral-500 text-sm">(note: this is not a complete list. To see all my public projects/work visit my github page.)</p>
            </div>
            <ul className="flex flex-col gap-10 w-full mx-auto">
                {projects.map((project, index) => (
                    <li key={index} className="flex flex-col gap-8 lg:flex-row items-center justify-start border-b-[1px] border-b-zinc-600 py-60 w-full">

                        <div className="flex flex-col w-auto gap-4">


                            <div className="">
                                <h4 className="text-white font-bakbak text-xl uppercase">{project.title}</h4>
                                <p className="text-neutral-100 font-poppins">{project.description}</p>
                            </div>

                            <div className="w-full h-full flex flex-col gap-4">
                                {/* {
                                    project.image &&
                                    <div className="rounded-md bg-zinc-600 bg-opacity-25 p-2">
                                        <img src={project.image} className="bg-cover h-auto w-full"></img>
                                    </div>
                                } */}

                                <div className="w-full h-full flex flex-col  items-center gap-4">
                                    <div className=" flex flex-row items-center justify-start gap-2 flex-wrap mr-auto">
                                        {
                                            project.stack.map((img, index) => (
                                                <img src={img} alt={"technology"} width={40} className="p-2 bg-zinc-800 rounded-full" />
                                            ))
                                        }
                                    </div>

                                    <div className="italic text-zinc-500 mr-auto">
                                        {project.date}
                                    </div>

                                </div>
                            </div>


                        </div>

                        <a href={project.github} target="_blank" className="mr-auto lg:ml-auto mb-4 lg:mr-4 text-3xl duration-150 hover:text-white/50">
                            <FaLink />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProjectsCard;