import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const UrlShortenerPage = () => {
    const [originalUrl, setOriginalUrl] = useState("");
    const [shortenedUrl, setShortenedUrl] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setShortenedUrl("");

        try {
            const response = await fetch(`${import.meta.env.VITE_URL_API}/u/shorten`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
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
        <div className="relative min-h-screen  text-white font-sans">
            {/* Fixed top navbar */}
            <div className="absolute top-0 left-0 w-full p-4 z-20">
                <Link to="/" className="flex items-center gap-2 underline hover:text-gray-300">
                    <FaArrowLeft /> Home
                </Link>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
                {/* Main Card */}
                <div className="w-full max-w-lg bg-black bg-opacity-70 border border-gray-700 rounded-lg p-6 shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="originalUrl" className="block mb-2">Enter URL to shorten:</label>
                            <input
                                type="url"
                                id="originalUrl"
                                value={originalUrl}
                                onChange={(e) => setOriginalUrl(e.target.value)}
                                className="w-full p-3 bg-black border border-gray-600 rounded focus:outline-none focus:border-gray-400"
                                placeholder="https://example.com"
                                required
                            />
                        </div>
                        <button type="submit" className="w-full py-3 bg-gray-800 hover:bg-gray-700 rounded font-medium">
                            Shorten URL
                        </button>
                    </form>
                    {/* Display Result */}
                    {shortenedUrl && (
                        <div className="mt-6 p-4 border-t border-gray-600">
                            <p className="mb-2">Shortened URL:</p>
                            <a href={shortenedUrl} className="underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                                {shortenedUrl}
                            </a>
                        </div>
                    )}
                    {/* Display Error */}
                    {error && (
                        <div className="mt-6 text-red-500">
                            <p>{error}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UrlShortenerPage;