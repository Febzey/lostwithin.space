import { Link, useLocation } from "react-router-dom";
import TextEffect from "../../extra/textEffect/textEffect";
import { useState, useRef, useEffect } from "react";

const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloat = (min: number, max: number, decimals: number) => {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
    return parseFloat(str);
};

export default function GreetingCard() {
    const [command, setCommand] = useState("");
    const [output, setOutput] = useState<string[]>([]);
    const outputRef = useRef<HTMLDivElement>(null);
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
        loadAverage: "0.58, 0.76, 0.65"
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setServerStats(prevStats => ({
                ...prevStats,
                cpu: "8x Intel Core i7 @ 3.90GHz",
                memory: `${getRandomInt(8, 16)} GB / 16 GB (${getRandomInt(50, 100)}%)`,
                disk: `952 GB / 16 TB (48%)`,
                processes: getRandomInt(200, 300),
                loadAverage: `${getRandomFloat(0.1, 1.0, 2)}, ${getRandomFloat(0.1, 1.0, 2)}, ${getRandomFloat(0.1, 1.0, 2)}`
            }));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            let newOutput = [...output];
            if (command.trim() === "help") {
                newOutput = [...newOutput, "Available commands: help, echo [message], clear, add, sub, mul, div, date, ls, cwd"];
            } else if (command.startsWith("echo ")) {
                newOutput = [...newOutput, command.slice(5)];
            } else if (command.trim() === "clear") {
                newOutput = [];
            } else if (command.startsWith("add ")) {
                const [_, num1, num2] = command.split(" ");
                const result = parseFloat(num1) + parseFloat(num2);
                newOutput = [...newOutput, `Result: ${result}`];
            } else if (command.startsWith("sub ")) {
                const [_, num1, num2] = command.split(" ");
                const result = parseFloat(num1) - parseFloat(num2);
                newOutput = [...newOutput, `Result: ${result}`];
            } else if (command.startsWith("mul ")) {
                const [_, num1, num2] = command.split(" ");
                const result = parseFloat(num1) * parseFloat(num2);
                newOutput = [...newOutput, `Result: ${result}`];
            } else if (command.startsWith("div ")) {
                const [_, num1, num2] = command.split(" ");
                const result = parseFloat(num1) / parseFloat(num2);
                newOutput = [...newOutput, `Result: ${result}`];
            } else if (command.trim() === "date") {
                newOutput = [...newOutput, new Date().toString()];
            } else if (command.trim() === "ls") {
                newOutput = [...newOutput, 
                    "├── etc/",
                    "│   ├── nginx/",
                    "│   ├── ssh/",
                    "│   └── hosts",
                    "└── home/",
                    "    ├── user/",
                    "    └── rootcorp/"
                ];
            } else if (command.trim() === "cwd") {
                newOutput = [...newOutput, "rootcorp/home"];
            } else {
                newOutput = [...newOutput, `Command not found: ${command}`];
            }
            setOutput(newOutput);
            setCommand("");
            setTimeout(() => {
                if (outputRef.current) {
                    outputRef.current.scrollTop = outputRef.current.scrollHeight;
                }
            }, 0);
        }
    };

    return (
        <div className="h-screen text-green-400 font-inco p-6 flex flex-col">
            <div className="border border-green-400 w-full h-full flex flex-col">
                {/* Terminal Header */}
                <div className="bg-green-600 text-black px-3 py-1 flex justify-between">
                    <TextEffect t="RootCorp Terminal v2.0.1" className=""></TextEffect>
                    <span>{location.pathname}</span>
                </div>

                {/* Main Body */}
                <div ref={outputRef} className="p-4 flex-grow text-sm space-y-4 overflow-y-auto">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="space-y-1">
                            <p>$ <Link className="underline hover:text-blue-300" to="/projects">/projects</Link></p>
                            <p>$ <Link className="underline hover:text-blue-300" to="/blogs">/blogs</Link></p>
                            <p>$ <Link className="underline hover:text-blue-300" to="/vpn">/vpn</Link></p>
                            <p>$ <Link className="underline hover:text-blue-300" to="/irc">/IRC</Link></p>
                            <p>$ <Link className="underline hover:text-blue-300" to="/shortener">/shortener</Link></p>
                        </div>

                        <div className="text-xs w-full md:w-1/4 mt-4 md:mt-0">
                            <div className="border-b border-green-400 mb-2 pb-2">
                                <p className="font-bold">Rootcorp v2.0.1:</p>
                                <p>Kernel: 7.2.19-virtual</p>
                                <p>Uptime: {serverStats.uptime}</p>
                                <p>CPU: {serverStats.cpu}</p>
                                <p>GPU: {serverStats.gpu}</p>
                                <p>Memory: {serverStats.memory}</p>
                                <p>Disk: {serverStats.disk}</p>
                                <p>Processes: {serverStats.processes}</p>
                                <p>SSH: {serverStats.ssh}</p>
                                <p>IP: {serverStats.ip}</p>
                                <p>Load Average: {serverStats.loadAverage}</p>
                            </div>
                            <div className="border-b border-green-400 mb-2 pb-2">
                                <p className="font-bold">Community Notes:</p>
                                <p className="mt-1">Welcome to RootCorp, a WIP and dynamic hub for various projects and services. This site is always evolving, and we value your feedback.</p>
                                <p className="mt-1">RootCorp is an "everything" site, providing tools, resources, and a collaborative space for developers and enthusiasts. Explore, contribute, and join our community on Discord.</p>
                                <p className="mt-1">Contact me on Discord at 'febzey' or via IRC. We also invite new members if you're interested.</p>
                            </div>
                            <div>
                                <p className="font-bold">Applications Currently Running:</p>
                                <p className="mt-1">Contabo (Dusseldorf):</p>
                                <ul className="ml-4 list-disc list-inside">
                                    <li>ForestBot Instances</li>
                                    <li>ForestBot Discord</li>
                                    <li>ForestBot Website (<a href="https://forestbot.org" className="underline hover:text-blue-300">https://forestbot.org</a>)</li>
                                    <li>ForestBot Control Server (<a href="https://api.forestbot.org/status" className="underline hover:text-blue-300">https://api.forestbot.org</a>)</li>
                                    <li>Minecraft Server (forestbot.org) (1.21.1 Folia)</li>
                                    <li>RootCorp Proxy Server for Minecraft 1.21.1</li>
                                    <li>RootCorp Website (<a href="https://lostwithin.space" className="underline hover:text-blue-300">https://lostwithin.space</a>)</li>
                                    <li>RootCorp Tools And API</li>
                                    <li>MariaDB (mySql)</li>
                                </ul>
                                <p className="mt-1">RaspberryPi (Canada):</p>
                                <ul className="ml-4 list-disc list-inside">
                                    <li>Active Private Project</li>
                                    <li>Pearlers (Pearl Butlers – Community bot for many ender stasis')</li>
                                    <li>Active Private Project</li>
                                    <li>Web Surfers (scans for open ports, Minecraft servers, and other network services)</li>
                                    <li>Public IRC Chat</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1">
                        {output.map((line, index) => (
                            <p key={index} className="whitespace-pre-wrap break-words">{line}</p>
                        ))}
                    </div>
                </div>

                {/* Footer (command prompt) */}
                <div className="border-t border-green-400 px-4 py-2 flex items-center">
                    <span className="mr-2">$</span>
                    <input
                        type="text"
                        className="flex-grow bg-transparent outline-none text-green-400"
                        value={command}
                        onChange={e => setCommand(e.target.value)}
                        onKeyDown={handleCommand}
                        placeholder="Type a command..."
                    />
                </div>
            </div>
        </div>
    );
}