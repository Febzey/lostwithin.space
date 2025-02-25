import { FaArrowLeft, FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface BlogMetadata {
    title: string;
    summary: string;
    published_date: string;
    views: number;
    slug: string;
    id: number;
    author: string;
}

const BlogsList = () => {
    const [blogPosts, setBlogPosts] = useState<BlogMetadata[]>([]);
    const nav = useNavigate();
    const location = useLocation();

    const importBlogMetadata = async () => {
        const metadataContext = import.meta.glob("/assets/blogs/*/metadata.json", { eager: true });
        const jsonModules = Object.values(metadataContext);
        for (const module of jsonModules) {
            if (!module) continue;
            const metadata = (module as any).default;
            const url = import.meta.env.VITE_URL_API;
            try {
                const response = await fetch(`${url}/views?id=${metadata.id}`);
                if (response.ok) {
                    const data = await response.json();
                    metadata.views = data.view_count;
                }
            } catch (error) {
                console.error("Failed to fetch views:", error);
            }
            setBlogPosts(prev => [...prev, metadata]);
        }
    };

    useEffect(() => {
        importBlogMetadata();
    }, []);

    return (
        <div className="relative min-h-screen  text-white font-sans">
            {/* Fixed top navbar */}
            <div className="absolute top-0 left-0 w-full p-4 z-20">
                <Link to="/" className="flex items-center gap-2 underline hover:text-gray-300">
                    <FaArrowLeft /> Home
                </Link>
            </div>
            {/* Main Content */}
            <div className="relative z-10 flex flex-col min-h-screen px-4 py-8">
                <div className="w-full  bg-black bg-opacity-80  rounded-lg p-8 shadow-2xl">
                    <h1 className="text-4xl font-bold text-center mb-8 ">Explore Our Blogs</h1>
                    <div className="space-y-8 w-full mx-auto lg:w-2/3">
                        {blogPosts.map((preview, key) => (
                            <div key={key}>
                                <div 
                                    className="relative  cursor-pointer rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
                                    onClick={() => nav(`/blogs/${preview.slug}`)}
                                    style={{ backgroundImage: "url('/assets/space-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <div className=" inset-0 bg-black bg-opacity-60 p-6 flex flex-col justify-between">
                                        <div>
                                            <h2 className="text-2xl font-bold mb-2">{preview.title}</h2>
                                            <p className="text-sm text-gray-300 mb-4">{preview.summary}</p>
                                        </div>
                                        <div className="flex items-center justify-between text-xs text-gray-400">
                                            <div className="flex items-center gap-1">
                                                <FaEye /><span>{preview.views}</span>
                                            </div>
                                            <div className="text-right">
                                                <p>{preview.published_date}</p>
                                                <p className="italic">By {preview.author}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Gradient line */}
                                {key < blogPosts.length - 1 && (
                                    <div className="my-4 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsList;