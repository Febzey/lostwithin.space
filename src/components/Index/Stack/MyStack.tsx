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
import css from '../../../images/technologies/css.svg';
import fastify from '../../../images/technologies/fastify.svg'
import vite from '../../../images/technologies/vite.svg';
import nginx from '../../../images/technologies/nginx.svg';

import { useState } from 'react';

const MyStackCard = () => {
    const [images] = useState([
        {
            img: express,
            name: 'express'
        },
        {
            img: nginx,
            name: 'nginx'
        },
        {
            img: vite,
            name: 'Vite.js'
        },
        {
            img: html,
            name: 'html5'
        },
        {
            img: vscode,
            name: "vscode"
        },
        {
            img: fastify,
            name: "Fastify"
        },
        {
            img: css,
            name: 'css3'
        },
        {
            img: git,
            name: 'git'
        },
        {
            img: javascript,
            name: 'JavaScript'
        },
        {
            img: mysql,
            name: 'mySQL'
        },
        {
            img: node,
            name: 'nodejs'
        },
        {
            img: react,
            name: 'react'
        },
        {
            img: tailwind,
            name: 'Tailwindcss'
        },
        {
            img: typescript,
            name: 'TypeScript'
        },
    ])

    return (
        <div className="w-full min-h-72 bg-green-500/90 rounded-xl mt-12 shadow-2xl relative">
            <div className="z-50">
                <div className="bg-green-500 w-full min-h-20 h-20 rounded-t-xl flex items-center p-8">
                    <h1 className="font-bakbak text-3xl text-white mx-auto">Technologies</h1>
                </div>

                <ul className="gap-2 w-full h-full  grid lg:grid-cols-6 grid-cols-2 p-4 font-poppins">
                    {
                        images.map((img, val) => (
                            <li key={val} className="flex flex-col gap-2 items-center justify-center p-2 bg-neutral-800/20 rounded-lg">
                                <img src={img.img} alt={img.name} width={40}></img>
                                <p className="text-sm px-2">{img.name}</p>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </div>
    )

}

export default MyStackCard;