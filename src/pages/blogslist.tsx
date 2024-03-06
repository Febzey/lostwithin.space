import { FaArrowLeft, FaEye } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"


interface BlogMetadata {
    title: string,
    summary: string,
    published_date: string,
    views: number,
    slug: string
}

const BlogsList = () => {

    const [blogPosts, setBlogPosts] = useState<BlogMetadata[]>([]);
    const nav = useNavigate();

    const importBlogMetadata = async () => {
        const metadataContext = import.meta.globEager('/assets/blogs/*/metadata.json');
        console.log(metadataContext)
        const jsonModules = Object.values(metadataContext);

        for (const module of jsonModules) {
            setBlogPosts(prev => [...prev, module.default]);
        }
    };

    useEffect(() => {
        importBlogMetadata();
    }, []);

    return (
        <div className="w-full p-6 lg:w-3/6 mx-auto ">
            <Link to={"/"} className="flex flex-row gap-2 items-center underline-offset-4 duration-150 hover:text-neutral-500">
                <FaArrowLeft />
                Home
            </Link>

            <section className="flex flex-col gap-20 w-full mt-24 mb-48">

                {
                    blogPosts.map((preview, key) => {
                        return (
                            <div key={key} className="w-full flex flex-col gap-3 cursor-pointer" onClick={()=>nav(`/blogs/${preview.slug}`)}>

                                <div className="flex flex-row-reverse justify-between w-full ">

                                    <div className="flex flex-col w-44 ml-auto text-right pt-1 text-neutral-300/70">
                                        {preview.published_date}
                                        <div className="flex flex-row gap-1 ml-auto items-center">
                                            {preview.views}
                                            <FaEye />
                                        </div>
                                    </div>

                                    <h1 className="text-4xl font-bold">{preview.title}</h1>
                                </div>


                                <p className="text-lg">{preview.summary}</p>

                                <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
                            </div>
                        )
                    })
                }

            </section>
        </div>
    )
}

export default BlogsList