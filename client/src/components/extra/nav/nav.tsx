import { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import CommunityNotesPopup from "../../Index/Greetings/CommunityNotesPopup";


export default function Nav() {

    const [showCommunity, setShowCommunity] = useState(false);

    return (
        <div className="fixed top-0 w-full flex justify-center z-50 font-Bakbak" >
            <div className="flex items-center space-x-3 bg-gray-800 rounded-b-md px-2 py-1 shadow shadow-gray-700">
                <button
                    onClick={() => setShowCommunity(true)}
                    className="text-sm text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-1 rounded transition-colors"
                >
                    Community Notes
                </button>
                <span className="w-px bg-gray-600 h-4" />
                <button
                    onClick={() => window.open("/", "_self")}
                    className="text-sm text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-1 rounded transition-colors"
                >
                    Home
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


            {
                showCommunity && (
                    <CommunityNotesPopup onClose={() => setShowCommunity(false)} />
                )
            }
        </div>
    );
}