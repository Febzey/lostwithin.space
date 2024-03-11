import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import { FaArrowLeft, FaEye } from "react-icons/fa"

interface BlogMetadata {
    title: string,
    summary: string,
    published_date: string,
    views: number,
    slug: string
}

const BlogPost = () => {
    const { slug } = useParams();
    const [markdownContent, setMarkdownContent] = useState("");
    const [meta, setMarkDownMeta] = useState<BlogMetadata>();

    const { pathname } = useLocation();

    const [views, setViews] = useState(0)

    useEffect(() => {

        if (!slug) return;

        const fetchBlogContent = async () => {
            const markDown = import.meta.glob(`/assets/blogs/*/*.md`, { eager: true, query: "?raw", import: "default"  });
            const metadatactx = import.meta.glob(`/assets/blogs/*/*.json`, { eager: true, query: "?raw", import: "default"  });

            const blog = markDown["/assets/blogs/" + slug + "/blog.md"] as any;
            const meta = metadatactx["/assets/blogs/" + slug + "/metadata.json"] as any

            setMarkdownContent(blog.toString());
            setMarkDownMeta(JSON.parse(meta.toString()));

            return
        }

        const fetchBlogViews = async () => {
            try {
                const url = import.meta.env.VITE_ANALYTICS_URL;
                const cleanedPathname = pathname.replace(/^#/, '');
                const urlToSearch = `${window.location.host}${cleanedPathname}`
                console.log(urlToSearch)
                const response = await fetch(`${url}/views?url=${urlToSearch}`)
                if (response.ok) {
                    const data = await response.json();
                    setViews(data.view_count)
                }

            } catch (err) {

            }
        }

        fetchBlogContent();
        fetchBlogViews();
    }, [slug]);



    if (!markdownContent) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-full p-6 lg:w-3/6 mx-auto min-h-screen">
            <Link to={"/blogs"} className="flex flex-row gap-2 items-center underline-offset-4 duration-150 hover:text-neutral-500">
                <FaArrowLeft />
                Other Posts
            </Link>


            <div className="mt-24">
                <div className="flex-row flex justify-between w-full p-1">
                    <div className="flex flex-col italic text-neutral-400">
                        <p>{meta?.published_date}</p>
                        <span className="flex flex-row gap-1 items-center"><FaEye />{views}</span>
                    </div>
                </div>

                <ReactMarkdown className="mt-24 mb-48"
                    components={{
                        // Map `h1` (`# heading`) to use `h2`s.
                        h1: ({ node, ...props }) => <h2 className="text-5xl font-bold mb-6" {...props} />,

                        h2: ({ node, ...props }) => <h2 className="text-4xl font-bold mb-4 mt-11" {...props} />,
                        p: ({ node, ...props }) => <p className="text-lg" {...props} />,

                        // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
                        em: ({ node, ...props }) => <i style={{ color: 'red' }} {...props} />,
                        a: ({ node, ...props }) => <a className="text-sky-400 underline-offset-2 underline duration-150 hover:text-sky-600" {...props} />,
                    }}
                >{markdownContent}</ReactMarkdown>
            </div>
        </div>
    );
};

export default BlogPost;