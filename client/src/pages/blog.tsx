import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import { FaArrowLeft, FaEye } from "react-icons/fa"

interface BlogMetadata {
    title: string,
    summary: string,
    published_date: string,
    views: number,
    slug: string,
    id: number,
    author: string
}

const BlogPost = () => {
    const { slug } = useParams();

    const [markdownContent, setMarkdownContent] = useState("");
    const [meta, setMarkDownMeta] = useState<BlogMetadata>();
    const [isWhiteText, setIsWhiteText] = useState(false);
    const { pathname } = useLocation();
    const [views, setViews] = useState(0)

    useEffect(() => {
        if (!slug) return;

        let metaId = 0;

        const markDown = import.meta.glob(`/assets/blogs/*/*.md`, { eager: true, query: "?raw", import: "default" });
        const metadatactx = import.meta.glob(`/assets/blogs/*/*.json`, { eager: true, query: "?raw", import: "default" });
        const blog = markDown["/assets/blogs/" + slug + "/blog.md"] as any;
        const meta = metadatactx["/assets/blogs/" + slug + "/metadata.json"] as any;
        const parsedMeta = JSON.parse(meta.toString());
        metaId = meta.id;
        setMarkdownContent(blog.toString());
        setMarkDownMeta(JSON.parse(meta.toString()));


        const fetchBlogViews = async () => {
            try {
                const url = import.meta.env.VITE_URL_API;
                const response = await fetch(`${url}/views?id=${parsedMeta.id}`);
                if (response.ok) {
                    const data = await response.json();
                    setViews(data.view_count);
                }
            } catch (err) {
                console.error('Failed to fetch blog views:', err);
            }
        }

        const incrementBlogViews = async () => {
            try {
                const url = import.meta.env.VITE_URL_API;
                await fetch(`${url}/views`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id: parsedMeta.id }),
                });
            } catch (err) {
                console.error('Failed to increment blog views:', err);
            }
        }

        fetchBlogViews();
        incrementBlogViews();
    }, [slug]);

    const toggleTextColor = () => {
        setIsWhiteText(!isWhiteText);
    };

    if (!markdownContent) {
        return <div>Loading...</div>;
    }

    return (
        <div className={`min-h-screen bg-black ${isWhiteText ? 'text-white' : 'text-green-500'} font-mono p-6 w-full lg:w-2/3 mx-auto`}>
            <div className="flex justify-between items-center">
            <Link to={"/blogs"} className="flex flex-row gap-2 items-center underline hover:text-green-300">
                <FaArrowLeft />
                Other Posts
            </Link>

            <button onClick={toggleTextColor} className="mt-4 underline hover:text-green-300">
                Toggle Text Color
            </button>
            </div>

            <div className="mt-4 ">
                <div className="flex flex-col mr-auto italic text-sm mb-4">
                    <p>Author: {meta?.author}</p>

                    <p>{meta?.published_date}</p>
                    <span className="flex flex-row gap-1 items-center">
                        <FaEye /> {views}
                    </span>
                </div>

                <ReactMarkdown
                    className="space-y-4 mt-20"
                    components={{
                        h1: ({ node, ...props }) => <h2 className="text-3xl font-bold" {...props} />,
                        h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold mt-6" {...props} />,
                        p: ({ node, ...props }) => <p className="text-base" {...props} />,
                        em: ({ node, ...props }) => <i className="text-red-500" {...props} />,
                        a: ({ node, ...props }) => (
                            <a className="underline text-green-400 hover:text-green-200" {...props} />
                        ),
                    }}
                >
                    {markdownContent}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default BlogPost;