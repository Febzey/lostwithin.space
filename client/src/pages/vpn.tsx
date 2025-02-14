import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import TextEffect from "../components/extra/textEffect/textEffect";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const Vpn = () => {
    const location = useLocation();
    const [email, setEmail] = useState("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle email submission logic here
        console.log("Email submitted:", email);
    };

    return (
        <div className="h-screen bg-black text-green-400 font-inco p-6 flex flex-col">
            <div className="border border-green-400 w-full h-full flex flex-col relative">
                {/* Terminal Header */}
                <div className="bg-green-600 text-black px-3 py-1 flex justify-between">
                    <TextEffect t="RootCorp Terminal v2.0.1" className=""></TextEffect>
                    <span>{location.pathname}</span>
                </div>

                <Link to={"/"} className="flex flex-row gap-2 absolute top-12 left-5 items-center underline hover:text-green-300 mb-4">
                        <FaArrowLeft />
                        Home
                    </Link>

                {/* Main Body */}
                <div className="p-4 flex-grow text-sm space-y-4 overflow-y-auto flex flex-col items-center justify-center">
                    <div className="border border-green-400 p-6 text-center">
                        <h1 className="text-2xl mb-4">Secure VPN and Proxy Service Coming Soon</h1>
                        <p className="mb-4">Enter your email below to get early access or to participate in beta testing.</p>
                        <form onSubmit={handleSubmit} className="flex flex-col items-center">
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="Enter your email"
                                className="mb-4 p-2 border border-green-400 bg-black text-green-400"
                                required
                            />
                            <button type="submit" className="px-4 py-2 bg-green-600 text-black">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vpn;
