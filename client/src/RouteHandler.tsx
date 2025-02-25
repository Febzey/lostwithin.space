import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import BlogPost from './pages/blog';
import BlogsList from './pages/blogslist';
import Projects from './pages/projects';
import IRCPage from './pages/irc';
import UrlShortenerPage from './pages/shortener';
import Footer from './components/footer/footer';
import Background from './components/extra/particles/background'; // Import the Background component

export default function RouteHandler() {
    return (
        <div className="bg-black relative min-h-screen ">
            {/* Add the Background component globally */}
            <BrowserRouter>
            <Background />

                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/blogs/:slug" element={<BlogPost />} />
                    <Route path="/blogs" element={<BlogsList />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/irc" element={<IRCPage />} />
                    <Route path="/shortener" element={<UrlShortenerPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};