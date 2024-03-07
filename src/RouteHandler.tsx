import { HashRouter, Routes, Route } from 'react-router-dom';
import Index, { NavBar } from './pages/Index';
import BlogPost from './pages/blog';
import BlogsList from './pages/blogslist';
import Projects from './pages/projects';

export default function RouteHandler() {
    return (
        <div className="dark:bg-zinc-900 bg-neutral-100 dark:text-white text-zinc-800">
            <NavBar/>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/blogs/:slug" element={<BlogPost />} />
                    <Route path="/blogs" element={<BlogsList />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </HashRouter>
        </div>
    )
};