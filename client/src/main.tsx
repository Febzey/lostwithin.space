import './styles/index.css';
import RouteHandler from './RouteHandler';
import ReactDOM from 'react-dom';

function App() {
    return <RouteHandler />;
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
