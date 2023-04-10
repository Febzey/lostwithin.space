
import { FaDiscord, FaSteam, FaEnvelope, FaGithub, FaChevronDown } from "react-icons/fa";
import TextEffect from "../../extra/textEffect/textEffect";

const socials = [
    {
        name: "discord",
        icon: FaDiscord,
        url: "https://discord.com/users/703044116019281963",
    },
    {
        name: "steam",
        icon: FaSteam,
        url: "https://steamcommunity.com/profiles/76561199071011994",
    },
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
    const domainName = window.location.hostname;
    let mainTitle = domainName.includes("febzey") ? "Febzey" : "Brayden";

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center z-20 absolute bg-zinc-900/30">
            <div className="flex flex-col w-full lg:w-1/3 lg:max-w-[33%] p-6 gap-4 relative">

                <h1><TextEffect t={`${mainTitle}.dev`} className="text-3xl text-white lg:text-left text-center" /></h1>
                <h2 className="text-white/90 text-md max-w-full">
                    Mediocre full stack developer based in Canada, with a passion for building intuitive and efficient software. I take interest in developing APIs, web apps and anything involving large data sets, using technologies such as React, Next, Node.js, Typescript and Golang. While I don't consider my self an expert in these technologies, I'm constantly learning and improving my skills to deliver high-quality work.
                </h2>


                <ul className="flex flex-row gap-4 w-full items-center justify-center py-10 px-4">
                    {
                        socials.map((social, index) => (
                            <a className="bg-zinc-200/10 p-3 rounded-full duration-150 hover:bg-zinc-200/40 active:bg-zinc-200/60" key={index} href={social.url} target="_blank">
                                <social.icon className="text-3xl" />
                            </a>
                        ))
                    }
                </ul>
            </div>

            <div className="text-neutral-400 text-xl absolute bottom-6 flex flex-col items-center gap-1">
                <p className="text-sm">Projects</p>
                <FaChevronDown className="animate-bounce" />
            </div>

            <p className=" text-neutral-400 text-sm fixed bottom-6 right-6">@ 2023 {mainTitle}.dev</p>

        </div>
    )
}