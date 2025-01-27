import {Link} from "react-router-dom";
import "../Styles/Navbar.css"

const Navbar = () => {
    return (
        <div className={"navbar"}>


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