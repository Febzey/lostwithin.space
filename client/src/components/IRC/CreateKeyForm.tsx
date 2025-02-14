import { useState } from "react";
import TextEffect from "../extra/textEffect/textEffect";
import { FaSpinner } from "react-icons/fa";

interface CreateKeyFormProps {
    setIsCreatingKey: (value: boolean) => void;
}

const CreateKeyForm = ({ setIsCreatingKey }: CreateKeyFormProps) => {
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [keyLocal, setKeyLocal] = useState("");

    const handleCreateKey = () => {
        setIsLoading(true);
        const url = import.meta.env.VITE_URL_API;

        fetch(`${url}/irc/keys`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username: username })
        })
            .then(response => response.json())
            .then(data => {
                if (data.key) {
                    setKeyLocal(data.key);
                } else {
                    setError("An error occurred while generating the key. Please try again.");
                }
            })
            .catch((e) => setError("An unexpected error occurred. Please try again." + e))
            .finally(() => setIsLoading(false));
    };

    return (
        <div className="h-screen text-green-400 font-inco p-6 flex flex-col">
            <div className="border border-green-400 w-full h-full flex flex-col">
                {/* Terminal Header */}
                <div className="bg-green-600 text-black px-3 py-1 flex justify-between">
                    <TextEffect t="RootCorp Terminal v2.0.1" className=""></TextEffect>
                    <span>/IRC</span>
                </div>

                {/* Create Key Form */}
                <div className="flex-grow p-4 flex flex-col items-center justify-center">
                    <div className="w-full max-w-md">
                        <h2 className="text-lg mb-4">Create New Key</h2>
                        <input
                            type="text"
                            className="w-full mb-2 p-2 bg-transparent border border-green-400 outline-none text-green-400"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <button
                            onClick={handleCreateKey}
                            className="w-full bg-green-600 text-black px-3 py-1"
                        >
                            {isLoading ? (
                                <FaSpinner className="animate-spin inline-block mr-2" />
                            ) : null}
                            Generate IRC Pass
                        </button>
                        <button
                            onClick={() => setIsCreatingKey(false)}
                            className="w-full mt-2 bg-green-600 text-black px-3 py-1"
                        >
                            Back to Sign In
                        </button>
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                        {keyLocal && <p className="text-green-400 mt-2">Your key is: {keyLocal}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateKeyForm;
