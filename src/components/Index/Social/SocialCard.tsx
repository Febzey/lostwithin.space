import { FaDiscord, FaSteam, FaEnvelope, FaGithub } from "react-icons/fa";

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

export default function SocialCard() {
    return (
        <div className="w-full min-h-72 bg-teal-500/90 rounded-xl mt-12 shadow-2xl relative">
        <div className="z-50">
            <div className="bg-teal-500 w-full min-h-20 h-20 rounded-t-xl flex items-center p-8">
                <h1 className="font-bakbak text-3xl text-white mx-auto">Socials</h1>
            </div>

            <ul className="flex flex-row gap-4 w-full items-center justify-center py-10 px-4">
                {
                    socials.map((social, index) => (
                        <a className="bg-neutral-800/20 p-4 rounded-lg" key={index} href={social.url} target="_blank">
                            <social.icon className="text-3xl"/>
                        </a>
                    ))
                }
            </ul>

        </div>
    </div>
    )
}