import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from './Pages/Intro';
import './App.css';
import './index.css'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Intro />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
