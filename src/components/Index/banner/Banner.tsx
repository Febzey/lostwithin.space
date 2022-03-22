import { Link }  from 'react-scroll';
import discord   from '../../../images/discord.svg'
import github    from '../../../images/github.svg'
import gmail     from '../../../images/gmail.svg'
import steam     from '../../../images/steam.svg'
import instagram from '../../../images/instagram.svg'


const Banner = (props: any) => {
    return (
        <>
            <div className="flex items-center justify-center w-full mb-12">
                <label className="flex items-center cursor-pointer ml-auto mr-8 mt-4">
                    <div className="relative">
                        <input id="toogleA" type="checkbox" className="sr-only" onClick={() => props.handleToggle()} />
                        <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner "></div>
                        <div className={" absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"} id="slider"></div>
                    </div>
                </label>

            </div>
            <div className="min-h-[100vh] w-full flex justify-center flex-col items-center gap-10 z-40 bg-zinc-900">
                <div className="flex flex-col z-40 text-center font-poppins gap-6 md:w-[80%] lg:w-1/3 absolute top-56">
                    <h1 className="text-4xl lg:text-6xl font-semibold">Hi, I'm <span className="text-indigo-500">Brayden</span>.</h1>
                    <div>
                        <p className="text-xl lg:text-3xl font-medium px-4"><span className="text-indigo-500">Full-Stack</span> Developer based in Canada. Creating functional and modern applications.</p>
                    </div>
                    <div className="flex flex-row gap-6 py-3 justify-center text-lg">
                        <Link to={"projects"} smooth={true} className="px-4 cursor-pointer border-b-8 border-rose-700 md:w-3/12 text-center py-3 rounded font-semibold bg-rose-500 duration-300 hover:bg-opacity-100 ease-in-out hover:motion-safe:scale-110">See Projects</Link>
                        <Link to={"contact"} smooth={true} className="px-4 border-b-8 border-indigo-700 cursor-pointer md:w-3/12 text-center py-3 rounded font-semibold bg-indigo-500 duration-300 hover:bg-opacity-100 ease-in-out hover:motion-safe:scale-110">Contact</Link>
                    </div>
                </div>

                <div className="flex flex-row gap-4 absolute bottom-20 px-8">
                    <a className="duration-300 motion-safe:hover:-translate-y-7 cursor-pointer" href="https://discord.com/users/703044116019281963"><img src={discord} height="110" width="110" ></img></a>
                    <a className="duration-300 motion-safe:hover:-translate-y-7 cursor-pointer" href="https://github.com/febzey"><img src={github} height="110" width="110" ></img></a>
                    <a className="duration-300 motion-safe:hover:-translate-y-7 cursor-pointer" href="mailto:braydent1235@gmail.com"><img src={gmail} height="110" width="110" ></img></a>
                    <a className="duration-300 motion-safe:hover:-translate-y-7 cursor-pointer" href="https://steamcommunity.com/profiles/76561199071011994"><img src={steam} height="110" width="110" ></img></a>
                    <a className="duration-300 motion-safe:hover:-translate-y-7 cursor-pointer" href="https://www.instagram.com/brayden_204/?hl=en"><img src={instagram} height="110" width="110" ></img></a>
                </div>

            </div>
        </>
    )
}

export default Banner;