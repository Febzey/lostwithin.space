import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import BlogPost from './pages/blog';
import BlogsList from './pages/blogslist';
import Projects from './pages/projects';

export default function RouteHandler() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/blogs/:slug" element={<BlogPost />} />
                <Route path="/blogs" element={<BlogsList />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    )
};