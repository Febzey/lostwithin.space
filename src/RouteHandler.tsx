import { HashRouter, Routes, Route } from 'react-router-dom';
import Index, { NavBar } from './pages/Index';
import BlogPost from './pages/blog';
import BlogsList from './pages/blogslist';
import Projects from './pages/projects';
import Vpn from './pages/vpn';

export default function RouteHandler() {
    return (
        <div className="bg-black ">
            
            {/* <NavBar/> */}
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/blogs/:slug" element={<BlogPost />} />
                    <Route path="/blogs" element={<BlogsList />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/vpn" element={<Vpn />} />
                </Routes>
            </HashRouter>
        </div>
    )
};