import ProjectsCard from "../components/Index/projects/Projects";
import { Link, useLocation } from "react-router-dom";
import TextEffect from "../components/extra/textEffect/textEffect";
import { FaArrowLeft } from "react-icons/fa";

const Projects = () => {
    const location = useLocation();

    return (
        <div className="relative min-h-screen text-gray-100 font-sans z-30">
            <Link to={"/"} className="flex flex-row gap-2 p-10 items-center underline hover:text-violet-300 mb-4">
                <FaArrowLeft />
                Home
            </Link>
            <div className="relative z-10 flex flex-col">
                {/* Hero Section */}
                <div
                    className="relative h-72 bg-no-repeat bg-black/30 bg-cover bg-center flex flex-col justify-center items-center"
                    style={{ backgroundImage: "url('/assets/space-bg.jpg')" }}
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-violet-500 tracking-wide">
                        Projects
                    </h1>
                    <p className="text-base md:text-lg text-white mt-2">
                        Explore our various projects and initiatives
                    </p>
                </div>

                {/* Main Content */}
                <main className="max-w-7xl mx-auto py-8 px-4 flex flex-col gap-6">
                    <div className="flex flex-col gap-6">
                        {/* Terminal Header */}
                        {/* <div className="bg-gradient-to-r from-purple-600 via-violet-500 to-red-500 text-black px-3 py-2 flex justify-between items-center rounded-t-lg">
                            <TextEffect t="RootCorp Terminal v2.0.1" className="text-lg font-bold"></TextEffect>
                            <span className="text-sm">{location.pathname}</span>
                        </div> */}

                        {/* Main Body */}
                        <div className="p-6 flex-grow text-sm space-y-4 overflow-y-auto bg-black bg-opacity-80 rounded-b-lg">
                            <ProjectsCard />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Projects;