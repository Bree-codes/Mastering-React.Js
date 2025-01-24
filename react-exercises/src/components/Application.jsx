import {Route, Routes} from "react-router-dom";
import App from "../App.jsx";
import Bree from "./Bree.jsx";
import {BrowserRouter} from "react-router-dom";


const Application = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Bree />} />
                <Route path={"/login"} element={<App />} />
                <Route path={"*"} element={<h1>404 Page Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Application;