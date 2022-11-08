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
            <div className="min-h-[100vh] w-full flex justify-center flex-col items-center z-40 bg-zinc-900 bg-mainBg bg-no-repeat bg-cover">
                <div className="flex flex-col z-40 text-center font-poppins gap-6 md:w-[80%] lg:w-1/3 absolute top-56">
                    <h1 className="text-5xl lg:text-7xl font-semibold underline underline-offset-8 decoration-indigo-500"><span className="font-mono">Brayden</span><span className="text-indigo-500">.tech</span></h1>
{/* 
                    <div className="flex flex-row gap-8 mx-auto lg:text-2xl">
                        <Link to={"projects"} smooth={true} className="font-semibold underline-offset-4 underline decoration-4 decoration-indigo-500 text-neutral-200 cursor-pointer duration-300 hover:scale-110">PROJECTS</Link>
                        <Link to={"contact"} smooth={true} className="font-semibold underline-offset-4 underline decoration-4 decoration-rose-500 text-neutral-200 cursor-pointer duration-300 hover:scale-110">CONTACT</Link>
                    </div> */}
                </div>

                <div className="flex flex-col gap-4 w-full absolute px-8 top-3/4">

                    <div className="flex flex-row gap-6 py-3 justify-center text-lg">
                        {/* <Link to={"projects"} smooth={true} className="px-4 cursor-pointer border-b-8 border-rose-700 md:w-3/12 text-center py-3 rounded font-semibold bg-rose-500 duration-300 hover:bg-opacity-100 ease-in-out hover:motion-safe:scale-110">See Projects</Link>
                        <Link to={"contact"} smooth={true} className="px-4 border-b-8 border-indigo-700 cursor-pointer md:w-3/12 text-center py-3 rounded font-semibold bg-indigo-500 duration-300 hover:bg-opacity-100 ease-in-out hover:motion-safe:scale-110">Contact</Link> */}
                    </div>
                    <div className="flex flex-row gap-3 mx-auto">
                        <a className="duration-300 motion-safe:hover:-translate-y-7 cursor-pointer" href="https://discord.com/users/703044116019281963"><img src={discord} height="" width="75" ></img></a>
                        <a className="duration-300 motion-safe:hover:-translate-y-7 cursor-pointer" href="https://github.com/febzey"><img src={github} height="" width="75" ></img></a>
                        <a className="duration-300 motion-safe:hover:-translate-y-7 cursor-pointer" href="mailto:braydent1235@gmail.com"><img src={gmail} height="" width="75" ></img></a>
                        <a className="duration-300 motion-safe:hover:-translate-y-7 cursor-pointer" href="https://steamcommunity.com/profiles/76561199071011994"><img src={steam} height="1" width="75" ></img></a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Banner;