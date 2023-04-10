import './styles/index.css';
import RouteHandler from './RouteHandler';
import ReactDOM from 'react-dom';
import { useEffect } from "react";

function App() {
    useEffect(() => {
        const domain = window.location.hostname;
        let title = '';
        if (domain.includes("febzey")) {
            title = "Febzey.dev"
        } else {
            title = "Brayden.dev"
        }

        document.title = title;
    }, []);

    return <RouteHandler />;
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
