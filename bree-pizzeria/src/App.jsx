import './App.css'
import Navbar from "./Components/Navbar.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.jsx";

const App = () => {
    return (
        <div className={"App"}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={ <Home/> } />
                </Routes>
            </Router>

        </div>
    );
};

export default App;
