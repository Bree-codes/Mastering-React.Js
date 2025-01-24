import {BrowserRouter, Route, Routes} from "react-router-dom";
import Products from "./Components/Products.jsx";
import Product from "./Components/Product.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = {"/"} element={<Products/>}/>
                <Route path={"/product/:productId"} element={<Product />} />
                <Route path={"*"} element={<h1> 404 PAGE NOT FOUND!!</h1>} />

            </Routes>

        </BrowserRouter>

    );
};

export default App;