import Particles from 'react-tsparticles';
import MyStackCard from '../components/Index/Stack/MyStack';
import ProjectsCard from '../components/Index/projects/Projects';
import SocialCard from '../components/Index/Social/SocialCard';
import GreetingCard from '../components/Index/Greetings/GreetingsCard';


const Index = () => {
    const config = {
        fpsLimit: 120,
        fullScreen: false,
        particles: {
            color: {
                value: "#a1a1aa",
            },
            links: {
                color: "#a1a1aa",
                distance: 30,
                enable: true
            },
            move: {
                enable: true,
                speed: 0.6
            },
            size: {
                value: 0.1
            },
            shape: {
                type: "circle",
            }
        }
    }

    return (
        <>
            <Particles params={config} className="block h-[100vh] w-full absolute z-0" />
            <div className="min-h-screen h-auto lg:w-5/12 p-4 mx-auto flex flex-col gap-12 my-12">
                <GreetingCard />
                <SocialCard/>
                <MyStackCard/>
                <ProjectsCard/>
            </div>
        </>
    )
};
export default Index;
