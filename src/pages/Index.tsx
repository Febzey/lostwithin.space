// import Particles from 'react-tsparticles';
import ProjectsCard from '../components/Index/projects/Projects';
import GreetingCard from '../components/Index/Greetings/GreetingsCard';
import { useEffect, useState } from "react";

import { FaMoon, FaSun, FaEnvelope } from "react-icons/fa"

const Index = () => {

    // const [viewSize, setViewSize] = useState({ width: 0, height: 0 });

    // useEffect(() => {
    //     const updateViewSize = () => {
    //         setViewSize({ width: window.innerWidth, height: window.innerHeight });
    //     };

    //     window.addEventListener("resize", updateViewSize);
    //     updateViewSize();

    //     return () => window.removeEventListener("resize", updateViewSize);
    // }, []);

    // const isMobile = viewSize.width < 768;

    // const config = {
    //     fpsLimit: 120,
    //     fullScreen: false,
    //     particles: {
    //         color: {
    //             value: "#a1a1aa",
    //         },
    //         links: {
    //             color: "#a1a1aa",
    //             distance: isMobile ? 20 : 50,
    //             enable: true,
    //         },
    //         move: {
    //             enable: true,
    //             speed: 0.6,
    //         },
    //         size: {
    //             value: isMobile ? 0.1 : 0.3,
    //         },
    //     },
    // };

    return (
        <div >
            {/* <Particles params={config} className="block h-screen max-h-screen w-full absolute top-0 z-10" /> */}

            <div className="h-screen lg:w-1/3 w-[90%] mx-auto relative">
                <NavBar />
                <GreetingCard />
            </div>

            {/* <ProjectsCard /> */}
        </div>
    )
};
export default Index;


function NavBar() {

    return (
        <div className="w-full h-[7%]  absolute z-50 bg-opacity-20">
            <div className="flex mx-auto w-full items-center justify-between h-full text-2xl py-4">
                <a href=""><FaEnvelope className="hover:text-sky-700 duration-200" /></a>

                <FaMoon />
            </div>

        </div>
    )
}