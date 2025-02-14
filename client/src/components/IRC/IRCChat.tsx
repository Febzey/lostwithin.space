import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import TextEffect from "../extra/textEffect/textEffect";
import CreateKeyForm from "./CreateKeyForm";
import { FaSpinner } from "react-icons/fa";

const IRCChat = () => {
    const url = import.meta.env.VITE_URL_API;

    const [message, setMessage] = useState("");
    const [chatHistory, setChatHistory] = useState<{ username: string, message: string }[]>([]);
    const [users, setUsers] = useState<{ username: string, client: string }[]>([]);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [key, setKey] = useState("");
    const [isCreatingKey, setIsCreatingKey] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const chatRef = useRef<HTMLDivElement>(null);
    const ws = useRef<WebSocket | null>(null);

    useEffect(() => {
        if (isSignedIn) {
            ws.current = new WebSocket('ws://localhost:3939/irc');
            ws.current.onopen = () => {
                console.log('WebSocket connected');
                ws.current?.send(JSON.stringify({ type: "validate", key, client: "website" }));
            };

            ws.current.onerror = (error) => {
                console.error('WebSocket error:', error);
            }


            ws.current.onmessage = (event) => {
                const data = JSON.parse(event.data);
                if (data.type === "message") {
                    setChatHistory((prev) => [...prev, { username: data.username, message: data.message }]);
                } else if (data.type === "users") {
                    setUsers(data.users);
                } else if (data.type === "chat-history") {
                    setChatHistory(data.history);
                }
            };

            ws.current.onclose = () => {
                console.log('WebSocket disconnected');
            };

            ws.current.onerror = (error) => {
                console.error('WebSocket error:', error);
            };

            return () => {
                ws.current?.close();
            };
        }
    }, [isSignedIn, username]);

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [chatHistory]);

    const sendMessage = () => {
        if (ws.current && message.trim()) {
            ws.current.send(JSON.stringify({ type: "message", message }));
            setMessage("");
        }
    };

    const handleSignIn = () => {
        setIsLoading(true);

        fetch(`${url}/irc/getkey?key=${key}`)
            .then(response => response.json())
        
            .then(data => {
                if (data.exists) {
                    console.log(data, " key exists heres data")
                    setUsername(data.data.username);
                    setIsSignedIn(true);
                } else {
                    setError("Key not found. Please try again or create a new key.");
                }
            })
            .catch(() => setError("An unexpected error occurred. Please try again."))
            .finally(() => setIsLoading(false));
    };

    if (!isSignedIn) {
        if (isCreatingKey) {
            return <CreateKeyForm setIsCreatingKey={setIsCreatingKey} />;
        }

        return (
            <div className="h-screen text-green-400 font-inco p-6 flex flex-col">
                <div className="border border-green-400 w-full h-full flex flex-col">
                    {/* Terminal Header */}
                    <div className="bg-green-600 text-black px-3 py-1 flex justify-between">
                        <TextEffect t="RootCorp Terminal v2.0.1" className=""></TextEffect>
                        <span>/IRC</span>
                    </div>

                    {/* Sign-In Form */}
                    <div className="flex-grow p-4 flex flex-col items-center justify-center">
                        <div className="w-full max-w-md">
                            <h2 className="text-lg mb-4">Sign In</h2>
                            <input
                                type="text"
                                className="w-full mb-2 p-2 bg-transparent border border-green-400 outline-none text-green-400"
                                placeholder="Key"
                                value={key}
                                onChange={(e) => setKey(e.target.value)}
                            />
                            <button
                                onClick={handleSignIn}
                                className="w-full mb-2 bg-green-600 text-black px-3 py-1"
                            >
                                {isLoading ? (
                                    <FaSpinner className="animate-spin inline-block mr-2" />
                                ) : null}
                                Sign In
                            </button>
                            <button
                                onClick={() => setIsCreatingKey(true)}
                                className="w-full bg-green-600 text-black px-3 py-1"
                            >
                                Create New Key
                            </button>
                            {error && <p className="text-red-500 mt-2">{error}</p>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="h-screen text-green-400 font-inco p-6 flex flex-col">
            <div className="border border-green-400 w-full h-full flex flex-col">
                {/* Terminal Header */}
                <div className="bg-green-600 text-black px-3 py-1 flex justify-between">
                    <TextEffect t="RootCorp Terminal v2.0.1" className=""></TextEffect>
                    <span>/IRC</span>
                </div>

                {/* Main Body */}
                <div className="flex-grow flex overflow-auto">
                    {/* Users List */}
                    <div className="w-1/5 border-r border-green-400 p-4 overflow-y-auto">
                        <h2 className="text-lg mb-2">Users</h2>
                        <ul>
                            {users.map((user, index) => (
                                <li key={index}>
                                    {user.username} {user.username === username && "(you)"} <span className="text-sm text-gray-500">({user.client})</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Chat Window */}
                    <div className="flex-grow p-4 overflow-y-auto" ref={chatRef}>
                        {chatHistory.map((msg, index) => (
                            <p key={index} className="whitespace-pre-wrap break-words">
                                <span className="font-bold">{msg.username}:</span> {msg.message}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Footer (message input) */}
                <div className="border-t border-green-400 px-4 py-2 flex items-center">
                    <span className="mr-2">$</span>
                    <input
                        type="text"
                        className="flex-grow bg-transparent outline-none text-green-400"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        onKeyDown={e => e.key === "Enter" && sendMessage()}
                        placeholder="Type a message..."
                    />
                    <button onClick={sendMessage} className="ml-2 bg-green-600 text-black px-3 py-1">Send</button>
                </div>
            </div>
        </div>
    );
};

export default IRCChat;
