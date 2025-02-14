import { FaArrowLeft, FaEye } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextEffect from "../components/extra/textEffect/textEffect";

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
            console.log(url);
            try {
                const response = await fetch(`${url}/views?id=${metadata.id}`);
                console.log(response);
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
        <div className="h-screen bg-black text-green-400 font-inco p-6 flex flex-col">
            <div className="border border-green-400 w-full h-full flex flex-col">
                {/* Terminal Header */}
                <div className="bg-green-600 text-black px-3 py-1 flex justify-between">
                    <TextEffect t="RootCorp Terminal v2.0.1" className=""></TextEffect>
                    <span>{location.pathname}</span>
                </div>

                {/* Main Body */}
                <div className="p-4 flex-grow text-sm space-y-4 overflow-y-auto">
                    <Link to={"/"} className="flex flex-row gap-2 items-center underline hover:text-green-300 mb-4">
                        <FaArrowLeft />
                        Home
                    </Link>

                    <section className="space-y-8">
                        {blogPosts.map((preview, key) => (
                            <div key={key} className="cursor-pointer" onClick={() => nav(`/blogs/${preview.slug}`)}>
                                <div className="flex flex-row justify-between items-center">
                                    <h1 className="text-3xl font-bold">{preview.title}</h1>
                                    <div className="flex flex-col items-end italic text-sm w-2/3 mb-auto">
                                        <div className="flex flex-row gap-1 items-center">
                                            <FaEye />
                                            {preview.views}
                                        </div>
                                        <div className="flex flex-col">
                                            <p>{preview.published_date}</p>
                                            <p className="ml-auto">Author: {preview.author}</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-4 text-base">{preview.summary}</p>
                                <hr className="my-4 border-green-700" />
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default BlogsList;