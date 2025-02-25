import { useCallback } from "react";
import Particles from "react-tsparticles";
import { MoveDirection, OutMode, type ISourceOptions } from "tsparticles";

const options: ISourceOptions = {
    background: {
        color: "#000",
    },
    particles: {
        number: {
            value: 100,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "out",
            },
            random: true,
            speed: 0.5,
            straight: false,
        },
        opacity: {
            animation: {
                enable: true,
                speed: 1,
                sync: false,
            },
            value: { min: 0, max: 1 },
        },
        size: {
            value: { min: 1, max: 3 },
        },
    },
};



export default function Background() {
    const particlesInit = useCallback(async (main: any) => {
        console.log(main);
        return Promise.resolve();
    }, []);

    const particlesLoaded = useCallback((container: any) => {
        console.log(container);
        return Promise.resolve();
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}
        />
    );
}