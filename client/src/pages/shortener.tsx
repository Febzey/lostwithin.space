import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import TextEffect from "../components/extra/textEffect/textEffect";

const UrlShortenerPage = () => {
    const [originalUrl, setOriginalUrl] = useState("");
    const [shortenedUrl, setShortenedUrl] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setShortenedUrl("");

        try {
            const response = await fetch(`${import.meta.env.VITE_URL_API}/url/shorten`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ originalUrl }),
            });

            if (response.ok) {
                const data = await response.json();
                setShortenedUrl(data.shortenedUrl);
            } else {
                const errorData = await response.json();
                setError(errorData.error);
            }
        } catch (error) {
            setError("Failed to shorten URL. Please try again.");
        }
    };

    return (
        <div className="h-screen bg-black text-green-400 font-inco p-6 flex flex-col">
            <div className="border border-green-400 w-full h-full flex flex-col">
                {/* Terminal Header */}
                <div className="bg-green-600 text-black px-3 py-1 flex justify-between">
                    <TextEffect t="RootCorp Terminal v2.0.1" className=""></TextEffect>
                    <span>/shortener</span>
                </div>

                {/* Main Body */}
                <div className="p-4 flex-grow text-sm space-y-4 overflow-y-auto">
                    <Link to={"/"} className="flex flex-row gap-2 items-center underline hover:text-green-300 mb-4">
                        <FaArrowLeft />
                        Home
                    </Link>

                    <section className="space-y-8">
                        <h1 className="text-3xl font-bold">URL Shortener</h1>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="originalUrl" className="block mb-2">Enter URL to shorten:</label>
                                <input
                                    type="url"
                                    id="originalUrl"
                                    value={originalUrl}
                                    onChange={(e) => setOriginalUrl(e.target.value)}
                                    className="w-full p-2 border border-green-400 bg-black text-green-400"
                                    required
                                />
                            </div>
                            <button type="submit" className="px-4 py-2 bg-green-600 text-black">Shorten URL</button>
                        </form>

                        {shortenedUrl && (
                            <div className="mt-4">
                                <p>Shortened URL:</p>
                                <a href={shortenedUrl} className="underline hover:text-green-300" target="_blank" rel="noopener noreferrer">
                                    {shortenedUrl}
                                </a>
                            </div>
                        )}

                        {error && (
                            <div className="mt-4 text-red-500">
                                <p>{error}</p>
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default UrlShortenerPage;