import { Link } from 'react-scroll';
import discord from '../../../images/discord.svg'
import github from '../../../images/github.svg'
import gmail from '../../../images/gmail.svg'
import steam from '../../../images/steam.svg'
import instagram from '../../../images/instagram.svg'
import wave from "../../../images/wave.svg"


const Banner = (props: any) => {
    return (
        <>
            <div className="min-h-[100vh] w-full flex justify-center flex-col items-center z-40 bg-zinc-800 bg-opacity-30">
                <div className="flex flex-col absolute top-1/4 z-40 text-center font-poppins gap-1 w-[80%] py-10">
                    <h1 className="text-4xl font-semibold">Brayden.tech</h1>
                    <p className="text-lg font-medium">Mediocre fullstack developer based in Canada.</p>
                </div>

                <div className="flex flex-col gap-4 w-full px-8 py-10 bg-zinc-900 absolute bottom-0">
                    <div className="flex flex-row gap-3 mx-auto">
                        <a className="duration-300 motion-safe:hover:-translate-y-7 cursor-pointer" href="https://discord.com/users/703044116019281963"><img src={discord} height="" width="59" ></img></a>
                        <a className="duration-300 motion-safe:hover:-translate-y-7 cursor-pointer" href="https://github.com/febzey"><img src={github} height="" width="59" ></img></a>
                        <a className="duration-300 motion-safe:hover:-translate-y-7 cursor-pointer" href="mailto:braydent1235@gmail.com"><img src={gmail} height="" width="59" ></img></a>
                        <a className="duration-300 motion-safe:hover:-translate-y-7 cursor-pointer" href="https://steamcommunity.com/profiles/76561199071011994"><img src={steam} height="1" width="59" ></img></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;