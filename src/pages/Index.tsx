import { useState } from 'react';
import Content from '../components/Index/content/Content';
import Particles from 'react-tsparticles';
import Banner from '../components/Index/banner/Banner';


const Index = () => {
    const [boolean, changeBoolean] = useState(false)
    const handleToggle = () => {
        !boolean
            ? document.getElementById('slider')?.classList.add("translate-x-6")
            : document.getElementById('slider')?.classList.remove("translate-x-6")
        changeBoolean(!boolean)
    }

    const config = {
        fpsLimit: 120,
        fullScreen: false,
        particles: {
            links: {
                distance: 150,
                enable: boolean
            },

            move: {
                enable: true,
            },
            size: {
                value: 0.4
            },
            shape: {
                type: "circle",
            }
        }
    }

    return (
        <>
            <Particles params={config} className="block h-[100vh] w-full absolute z-0" />
            <Banner handleToggle={handleToggle} />
            <Content />
        </>
    )
};
export default Index;