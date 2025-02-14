import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index, { NavBar } from './pages/Index';
import BlogPost from './pages/blog';
import BlogsList from './pages/blogslist';
import Projects from './pages/projects';
import Vpn from './pages/vpn';
import IRCPage from './pages/irc';
import UrlShortenerPage from './pages/shortener';

export default function RouteHandler() {
    return (
        <div className="bg-black ">
            
            {/* <NavBar/> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/blogs/:slug" element={<BlogPost />} />
                    <Route path="/blogs" element={<BlogsList />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/vpn" element={<Vpn />} />
                    <Route path="/irc" element={<IRCPage />} />
                    <Route path="/shortener" element={<UrlShortenerPage />} />


                </Routes>
            </BrowserRouter>
        </div>
    )
};