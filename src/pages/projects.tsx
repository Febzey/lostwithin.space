import ProjectsCard from "../components/Index/projects/Projects";
import { useLocation } from "react-router-dom";
import TextEffect from "../components/extra/textEffect/textEffect";

const Projects = () => {
    const location = useLocation();

    return (
        <div className="h-screen bg-black text-green-400 font-inco p-6 flex flex-col">
            <div className="border border-green-400 w-full h-full flex flex-col">
                {/* Terminal Header */}
                <div className="bg-green-600 text-black px-3 py-1 flex justify-between">
                    <TextEffect t="RootCorp Terminal v2.0.1" className=""></TextEffect>
                    <span>{location.pathname}</span>
                </div>

                {/* Main Body */}
                <div className="p-4 flex-grow text-sm space-y-4 overflow-y-auto">
                    <ProjectsCard />
                </div>
            </div>
        </div>
    );
};

export default Projects;