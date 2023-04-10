import Particles from 'react-tsparticles';
import ProjectsCard from '../components/Index/projects/Projects';
import GreetingCard from '../components/Index/Greetings/GreetingsCard';
import { useEffect, useState } from "react";

const Index = () => {

    const [viewSize, setViewSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateViewSize = () => {
            setViewSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener("resize", updateViewSize);
        updateViewSize();

        return () => window.removeEventListener("resize", updateViewSize);
    }, []);

    const isMobile = viewSize.width < 768;

    const config = {
        fpsLimit: 120,
        fullScreen: false,
        particles: {
            color: {
                value: "#a1a1aa",
            },
            links: {
                color: "#a1a1aa",
                distance: isMobile ? 20 : 50,
                enable: true,
            },
            move: {
                enable: true,
                speed: 0.6,
            },
            size: {
                value: isMobile ? 0.1 : 0.3,
            },
        },
    };

    return (
        <>
            <div className="h-screen w-full relative">
                <GreetingCard />
                <Particles params={config} className="block h-screen max-h-screen w-full absolute top-0 z-10" />
            </div>
        
            <ProjectsCard />
        </>
    )
};
export default Index;
