import { FaArrowLeft } from "react-icons/fa"
import { Link } from "react-router-dom"


const BlogsList= () => {
    return (
        <div className="w-full p-6 lg:w-3/6 mx-auto ">
            <Link to={"/"} className="flex flex-row gap-2 items-center underline-offset-4 duration-150 hover:text-neutral-500">
                <FaArrowLeft />
                Home
            </Link>
            List of each blog post. 
        </div>
    )
}

export default BlogsList