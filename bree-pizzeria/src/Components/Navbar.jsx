import Logo from "../assets/logo.jpg"
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={"navbar"}>
            <div className={"leftside"}>
                <img src={Logo} alt={"pizzeria logo"}/>
            </div>

            <div className={"rightside"}>
                <Link to ="/"> Home </Link>
                <Link to ="/menu"> Menu </Link>
                <Link to ="/about"> About </Link>
                <Link to ="/contact"> Contact </Link>

            </div>


        </div>
    );
};

export default Navbar;