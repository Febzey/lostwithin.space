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
        gpu: "NVIDIA Tesla T4",
        memory: "12 GB / 16 GB (75%)",
        disk: "250 GB / 512 GB (48%)",
        processes: 213,
        ssh: "Active connections: 2",
        ip: "192.168.1.101",
        loadAverage: "0.58, 0.76, 0.65"
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setServerStats({
                uptime: `${getRandomInt(50, 100)} days, ${getRandomInt(0, 23)} hours, ${getRandomInt(0, 59)} minutes`,
                cpu: "8x Intel Core i7 @ 3.90GHz",
                gpu: "NVIDIA Tesla T4",
                memory: `${getRandomInt(8, 16)} GB / 16 GB (${getRandomInt(50, 100)}%)`,
                disk: `${getRandomInt(200, 500)} GB / 512 GB (${getRandomInt(30, 60)}%)`,
                processes: getRandomInt(200, 300),
                ssh: `Active connections: ${getRandomInt(1, 5)}`,
                ip: "192.168.1.101",
                loadAverage: `${getRandomFloat(0.1, 1.0, 2)}, ${getRandomFloat(0.1, 1.0, 2)}, ${getRandomFloat(0.1, 1.0, 2)}`
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (outputRef.current) {
            outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
    }, [output]);

    const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (command.trim() === "help") {
                setOutput([...output, "Available commands: help, echo [message], clear, add, sub, mul, div, date, ls, cwd"]);
            } else if (command.startsWith("echo ")) {
                setOutput([...output, command.slice(5)]);
            } else if (command.trim() === "clear") {
                setOutput([]);
            } else if (command.startsWith("add ")) {
                const [_, num1, num2] = command.split(" ");
                const result = parseFloat(num1) + parseFloat(num2);
                setOutput([...output, `Result: ${result}`]);
            } else if (command.startsWith("sub ")) {
                const [_, num1, num2] = command.split(" ");
                const result = parseFloat(num1) - parseFloat(num2);
                setOutput([...output, `Result: ${result}`]);
            } else if (command.startsWith("mul ")) {
                const [_, num1, num2] = command.split(" ");
                const result = parseFloat(num1) * parseFloat(num2);
                setOutput([...output, `Result: ${result}`]);
            } else if (command.startsWith("div ")) {
                const [_, num1, num2] = command.split(" ");
                const result = parseFloat(num1) / parseFloat(num2);
                setOutput([...output, `Result: ${result}`]);
            } else if (command.trim() === "date") {
                setOutput([...output, new Date().toString()]);
            } else if (command.trim() === "ls") {
                setOutput([...output, 
                    "├── etc/",
                    "│   ├── nginx/",
                    "│   ├── ssh/",
                    "│   └── hosts",
                    "└── home/",
                    "    ├── user/",
                    "    └── rootcorp/"
                ]);
            } else if (command.trim() === "cwd") {
                setOutput([...output, "rootcorp/home"]);
            } else {
                setOutput([...output, `Command not found: ${command}`]);
            }
            setCommand("");
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
                    <div className="flex flex-row justify-between">
                        <div className="space-y-1">
                            <p>$ <Link className="underline hover:text-blue-300" to="/projects">/projects</Link></p>
                            <p>$ <Link className="underline hover:text-blue-300" to="/blogs">/blogs</Link></p>
                            <p>$ <Link className="underline hover:text-blue-300" to="/vpn">/vpn</Link></p>
                            <p>$ <Link className="underline hover:text-blue-300" to="/irc">/IRC</Link></p>

                            {/* <p>$ <Link className="underline hover:text-blue-300" to="/directories">/directories</Link></p>
                            <p>$ <Link className="underline hover:text-blue-300" to="/img">/data</Link></p> */}
                        </div>

                        <pre>
{`+------------------------------------------------+
 Rootcorp 2.0.1                                 
 Kernel: 7.2.19-virtual                         
 Uptime: 690 days, 4 hours, 20 minutes  
 CPU: ${serverStats.cpu.padEnd(40, ' ')}        
 GPU: ${serverStats.gpu.padEnd(40, ' ')}        
 Memory: ${serverStats.memory.padEnd(40, ' ')}  
 Disk: ${serverStats.disk.padEnd(40, ' ')}      
 Processes: ${serverStats.processes.toString().padEnd(40, ' ')}
 SSH: Active connections: 2        
 IP: ${serverStats.ip.padEnd(40, ' ')}          
 Load Average: ${serverStats.loadAverage.padEnd(40, ' ')}
+------------------------------------------------+`}
                        </pre>
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