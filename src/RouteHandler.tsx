import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index                            from './pages/Index';

export default function RouteHandler() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
};