import {Link} from "react-router-dom";
import bkgimage from "../assets/pizza-background.jpg";
import "../Styles/Home.css"

const Home = () => {
    return (
        <div className={"home"} style={{backgroundImage: `url(${bkgimage})`}} >
            <div className={"headerContainer"}>
                <h1>
                    Welcome to Brees Pizzeria!
                </h1>
                <p>
                    Savor the taste of our handcrafted pizzas, made with fresh ingredients and a passion for flavor.
                </p>
                <p>
                    Enjoy a slice of happiness today!
                </p>
                <Link to ="/menu">
                    <button> ORDER NOW </button>
                </Link>
            </div>

        </div>
    );
};

export default Home;
