import express        from '../../../images/technologies/express.svg';
import git            from '../../../images/technologies/git.svg';
import javascript     from '../../../images/technologies/javascript.svg';
import mysql          from '../../../images/technologies/mysql.svg';
import node           from '../../../images/technologies/node.svg';
import react          from '../../../images/technologies/react.svg';
import tailwind       from '../../../images/technologies/tailwind.svg';
import typescript     from '../../../images/technologies/typescript.svg';
import html           from '../../../images/technologies/html.svg';
import vscode         from '../../../images/technologies/vscode.svg';
import css            from '../../../images/technologies/css.svg';
import fastify        from '../../../images/technologies/fastify.svg'
import vite           from '../../../images/technologies/vite.svg';
import nginx          from '../../../images/technologies/nginx.svg';

import { useState }   from 'react';

const MyStack = () => {
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
        <div className="py-28 min-h-[90vh] w-full z-40 bg-neutral-50 flex flex-col gap-28 items-center justify-center">
            <div className="flex flex-col gap-12 w-[90%] lg:w-[70%] min-h-[40vh] py-12">
                <div className="flex flex-col text-center gap-2">
                    {/* <h1 className="text-4xl lg:text-5xl font-poppins font-bold text-zinc-600">My Stack.</h1> */}
                    <p className="text-zinc-700 font-poppins text-xl lg:text-2xl px-2">Technologies I use and are familiar with.</p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 items-center mx-auto gap-4 justify-center">
                    {
                        images.map(i => (
                            <div className="bg-zinc-50 text-neutral-600 h-44 border-2 border-transparent hover:border-sky-500 duration-300 ease-in-out shadow-xl font-semibold font-poppins flex flex-col items-center justify-center gap-2 rounded-xl lg:w-44 w-36 py-4 px-3">
                                <img src={i.img} width="100"></img>
                                <p>{i.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}

export default MyStack;