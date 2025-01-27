import './App.css'
import Navbar from "./Components/navbar.jsx";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";

const App = () => {
    return (
        <div className={"App"}>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact Component={Home} />
                </Switch>
            </Router>

        </div>
    );
};

export default App;
