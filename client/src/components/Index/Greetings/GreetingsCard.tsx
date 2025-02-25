import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaExclamationTriangle, FaDiscord } from "react-icons/fa";
import CommunityNotesPopup from "./CommunityNotesPopup";

const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloat = (min: number, max: number, decimals: number) => {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
    return parseFloat(str);
};

export default function GreetingCard() {
    const location = useLocation();
    const [serverStats, setServerStats] = useState({
        uptime: "69 days, 4 hours, 20 minutes",
        cpu: "8x Intel Core i7 @ 3.90GHz",
        gpu: "AMD Radeon Instinct MI200",
        memory: "12 GB / 16 GB (75%)",
        disk: "250 GB / 512 GB (48%)",
        processes: 213,
        ssh: "Active connections: 2",
        ip: "192.168.1.101",
        loadAverage: "0.58, 0.76, 0.65",
    });

    const [showBanner, setShowBanner] = useState(true);
    const [showCommunity, setShowCommunity] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setServerStats((prev) => ({
                ...prev,
                cpu: "8x Intel Core i7 @ 3.90GHz",
                memory: `${getRandomInt(8, 16)} GB / 16 GB (${getRandomInt(50, 100)}%)`,
                disk: `952 GB / 16 TB (48%)`,
                processes: getRandomInt(200, 300),
                loadAverage: `${getRandomFloat(0.1, 1.0, 2)}, ${getRandomFloat(0.1, 1.0, 2)}, ${getRandomFloat(0.1, 1.0, 2)}`,
            }));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen text-gray-100 z-30 font-Bakbak">
            {/* Tabs Container */}
            <div className="fixed top-0 w-full flex justify-center z-50 ">
                <div className="flex items-center space-x-3 bg-gray-800 rounded-b-md px-2 py-1 shadow shadow-gray-700">
                    <button
                        onClick={() => setShowCommunity(true)}
                        className="text-sm text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-1 rounded transition-colors"
                    >
                        Community Notes
                    </button>
                    <span className="w-px bg-gray-600 h-4" />
                    <button
                        onClick={() => window.open("https://discord.gg/AcddMYg5", "_blank")}
                        className="flex items-center text-sm text-[#5865F2] hover:text-white hover:bg-[#5865F2] px-3 py-1 rounded transition-colors"
                    >
                        <FaDiscord className="mr-1" />
                        Join Discord
                    </button>
                </div>
            </div>

            <div className="relative z-10 flex flex-col">

                {/* Hero Section */}
                <div
                    className="relative h-screen  bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center text-center"
                    style={{ backgroundImage: "url('/assets/space-bg.jpg')" }}
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-violet-500 tracking-wide uppercase">
                        lostwithin.space
                    </h1>
                    <p className="text-base font-light md:text-lg text-white mt-2">
                        Stake your claim on the internet.
                    </p>

                    {/* Quick Links */}
                    <section className="max-w-6xl mx-auto px-4 relative p-5">
                        <ul className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-4">
                            <li><Link to="/projects" className="block py-2 md:py-0 hover:text-violet-200 underline underline-offset-[4px] uppercase text-xs font-bold decoration-[2px]">projects</Link></li>
                            <li><Link to="/blogs" className="block py-2 md:py-0 hover:text-violet-200 underline underline-offset-[4px] uppercase text-xs font-bold decoration-[2px]">blogs</Link></li>
                            <li><Link to="/irc" className="block py-2 md:py-0 hover:text-violet-200 underline underline-offset-[4px] uppercase text-xs font-bold decoration-[2px]">irc</Link></li>
                            <li><Link to="/shortener" className="block py-2 md:py-0 hover:text-violet-200 underline underline-offset-[4px] uppercase text-xs font-bold decoration-[2px]">shortener</Link></li>
                        </ul>
                    </section>


                    {/* quick info about goal. */}
                    {showBanner && (
                        <div className="w-2/5 h-auto items-center justify-center mt-10 p-5 rounded flex flex-row relative z-50 bg-gray-800">
                            <button
                                onClick={() => setShowBanner(false)}
                                className="absolute top-2 -translate-y-4 translate-x-3 bg-gray-700 rounded-full w-5 right-2 text-sm text-gray-300 hover:text-white"
                            >
                                X
                            </button>
                            <div className="flex flex- h-full mr-5 items-center gap-2">
                                <div className="bg-violet-600 h-full w-2 rounded-full"></div>
                                {/* <FaExclamationTriangle className="text-4xl text-red-500"/> */}
                                
                            </div>
                            <div className="flex flex-col w-full h-full text-left justify-center">
                            <h2 className="text-lg  text-violet-500">Welcome to LostWithinSpace</h2>
                                <p className="text-sm text-gray-300 mt-1">
                                Welcome to LostWithinSpace, a work-in-progress hub for open-source projects and internet services. Our focus is on collaboration, exploration, and sharing knowledge. Feedback and contributions are always welcome—join the discussion on Discord or IRC.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Toggle Info Button */}

                {/* Community Notes Popup */}
                {showCommunity && (
                    <CommunityNotesPopup onClose={() => setShowCommunity(false)} />
                )}

                {/* Main Content */}

                {/* Footer */}
                {/* <footer className="bg-black text-center text-xs py-3 mt-6 border-t border-gray-700">
                © 2023 lostwithin.space · Beyond the horizon
            </footer> */}
            </div>
        </div>
    );
}
