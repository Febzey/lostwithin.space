
import { FaDiscord, FaSteam, FaEnvelope, FaGithub, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";


const socials = [
    // {
    //     name: "discord",
    //     icon: FaDiscord,
    //     url: "https://discord.com/users/703044116019281963",
    // },
    // {
    //     name: "steam",
    //     icon: FaSteam,
    //     url: "https://steamcommunity.com/profiles/76561199071011994",
    // },
    {
        name: "Gmail",
        icon: FaEnvelope,
        url: "mailto:braydent1235@gmail.com",
    },
    {
        name: "github",
        icon: FaGithub,
        url: "https://github.com/febzey",
    }
]

export default function GreetingCard() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center z-20 absolute">
            <div className="flex flex-col w-full gap-4 relative">

                <h1 className="text-xl text-white">Brayden Tschetter</h1>
                <p className="text-white/90">23 year old mediocre software dev from Manitoba, Canada. Mainly a hobbyist with experience in web apps, databases, server management and some microservices. </p>
                <p className="text-white/90">I enjoy network analysis, golang, exploring and creating protocols, bots and security research, though my public projects may not reflect this many are private.</p>
                <p className="text-white/90">I am sometimes available for occasional projects.  If you have something you would like made feel free to contact.  I can create and manage servers, create wep apps/websites from scratch, or even pen test your small businesses network to find weak points and vulnerabilities.   </p>

                <div className="flex flex-row gap-5 items-center justify-center m-8">
                    <Link className="bg-zinc-700 w-28 text-center p-2 rounded font-bold shadow-xl duration-150 hover:bg-zinc-800" to={"/projects"}>Projects</Link>
                    <Link className="bg-zinc-700 w-28 text-center p-2 rounded font-bold shadow-xl duration-150 hover:bg-zinc-800" to={"/blogs"}>Blog</Link>
                </div>

                <ul className="flex flex-row gap-4 w-full items-center justify-center px-4">
                    {
                        socials.map((social, index) => (
                            <a className="bg-zinc-200/10 p-3 rounded-full duration-150 hover:bg-zinc-200/40 active:bg-zinc-200/60" key={index} href={social.url} target="_blank">
                                <social.icon className="text-3xl" />
                            </a>
                        ))
                    }
                </ul>
            </div>    

            <p className=" text-neutral-400 text-sm right-0 left-0 text-center fixed bottom-6">@ 2020 - 2024 braydent.dev</p>

        </div>
    )
}