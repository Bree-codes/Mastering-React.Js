import './App.css'
import Navbar from "./Components/Navbar.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Footer from "./Components/Footer.jsx";
import About from "./Pages/About.jsx";


const App = () => {
    return (
        <div className={"App"}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={ <Home/> } />
                    <Route path="/about" exact element={ <About/> } />

                </Routes>

                <Footer/>
            </Router>

        </div>
    );
};

export default App;
