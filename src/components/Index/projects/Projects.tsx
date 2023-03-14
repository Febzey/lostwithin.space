import { useState } from 'react';
import { FaLink } from "react-icons/fa";

const ProjectsCard = () => {
    const [projects] = useState([
        {
            title: "gotime",
            description: "A minimal parser, formalizer and manipulator for time durations and dates in nodejs.",
            github: "https://github.com/Febzey/gotime"
        },
        {
            title: "React Boilerplate",
            description: "An easy to use, beginner friendly react/fastify backend boilerplate.",
            github: "https://github.com/febzey/rf-boiler"
        },
        {
            title: "MySQL Parser",
            description: "A web based SQL tool to perform database queries via user interface and restful API.",
            github: "https://github.com/febzey/mysql-parser"

        },
        {
            title: "www.eusurvival.com",
            description: "A React web app made for a European based Minecraft server called eusurvival.com",
            github: "https://github.com/febzey/eusurvival.com"
        },
        {
            title: "ForestBot",
            description: "Chinese Spy Bot for block game. Tracks many statistics. Has fully custom built data api, Discord Bot and web app.",
            github: "https://github.com/ForestB0T",
        },
        {
            title: "QuickEncrypt",
            description: "A nodejs package used for quickly and easily encrypting strings using common encryption algorithms.",
            github: "https://github.com/febzey/quickencrypt"

        },
        {
            title: "Scriber",
            description: "A blog post app with an ai helper, optimizing in SEO and SSR techniques, built with next and typescript.",
            github: "https://github.com/febzey/scriber",
        },
        {
            title: "Snapur",
            description: "An easy image hosting service with compression and serialization, made with next and golang.",
            github: "https://github.com/febzey/snapur",
        },
    ])

    const [showMore, setShowMore] = useState(false);
    const numProjectsToShow = showMore ? projects.length : 3;
    return (
        <div className="w-full min-h-72 bg-amber-600/90 rounded-xl mt-12 shadow-2xl relative">
            <div className="z-50 w-full flex flex-col">
                <div className="bg-amber-600 w-full min-h-20 h-20 rounded-t-xl flex items-center p-8">
                    <h1 className="font-bakbak text-3xl text-white mx-auto">Projects</h1>
                </div>

                <ul className="p-6 flex flex-col gap-8">
                    {projects.slice(0, numProjectsToShow).map((project, index) => (
                        <li key={index} className="flex flex-row items-center">
                            <div className="flex flex-col w-3/4">
                                <h2 className="text-white font-bakbak text-xl uppercase">{project.title}</h2>
                                <p className="text-neutral-100 font-poppins">{project.description}</p>
                            </div>

                            <a href={project.github} target="_blank" className="ml-auto mr-4 text-3xl">
                                <FaLink/>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Conditionally render the "Show more" button if there are more than 3 projects */}
                {projects.length > 3 && (
                    <button className="font-poppins mx-auto p-4 text-center text-sm bg-neutral-800/40 rounded duration-150 hover:bg-neutral-800" onClick={() => setShowMore(!showMore)}>
                        {showMore ? 'Show less' : 'Show more'}
                    </button>
                )}

                <p className="font-poppins mx-auto p-4 text-center text-sm">For a full list of open source projects you can go to my github page.</p>
            </div>
        </div>
    )
}

export default ProjectsCard;