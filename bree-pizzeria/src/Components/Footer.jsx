import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import "../Styles/Footer.css"

const Footer = () => {
    return (
        <div className={"footer"}>
            <div className={"socialmedia"}>
                <Facebook/> <Twitter/> <Instagram/> <LinkedIn/>

            </div>
            <p> &copy; 2025 breepizzeria.com</p>
        </div>
    );
};

export default Footer;