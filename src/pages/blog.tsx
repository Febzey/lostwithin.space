import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import { FaArrowLeft, FaEye } from "react-icons/fa"
import remark from 'remark';
import grayMatter from 'gray-matter';


const BlogPost = () => {
    const { slug } = useParams();
    const [markdownContent, setMarkdownContent] = useState("");

    useEffect(() => {
        const fetchBlogContent = async () => {
            try {
                const response = await fetch(`/blogs/${slug}.md`);
                if (!response.ok) {
                    throw new Error('Failed to fetch blog content');
                }

                const fileContent = await response.text();
                setMarkdownContent(fileContent);
            } catch (error) {
                console.error('Error fetching blog content:', error);
            }
        };

        fetchBlogContent();
    }, [slug]);

    if (!markdownContent) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-full p-6 lg:w-3/6 mx-auto ">
            <Link to={"/blogs"} className="flex flex-row gap-2 items-center underline-offset-4 duration-150 hover:text-neutral-500">
                <FaArrowLeft />
                Other Posts
            </Link>


            <div className="mt-24">
                <div className="flex-row flex justify-between w-full p-1">
                    <div className="flex flex-col">
                        <p>March 4th 2024</p>
                        <span className="flex flex-row gap-1 items-center"><FaEye /> 20</span>
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