import pizza from "../assets/pizza.jpg"
import "../Styles/About.css"

const About = () => {
    return (
        <div className="about">
            <div
                className="aboutTop" style={{ backgroundImage: `url(${pizza})` }}>
            </div>
            <div className="aboutBottom">
                <h1> ABOUT US</h1>
                <p>
                    Welcome to Brees Pizzeria, where our passion for exceptional food and love for community come together to create a truly memorable dining experience!
                    Founded on the belief that great food brings people together, we specialize in crafting mouthwatering gourmet pizzas, homemade pastas and classic Italian dishes, all made from the freshest ingredients sourced locally whenever possible.
                    Each dish is prepared with care and attention to detail, ensuring that every bite is bursting with authentic flavor.
                    At Brees Pizzeria, we pride ourselves on our warm and inviting atmosphere, making it the perfect spot for family gatherings, casual outings with friends, or a cozy date night.
                    Our friendly staff is dedicated to providing top-notch service, ensuring that your visit is as enjoyable as the delicious food we serve.
                    We believe that dining is not just about eating; it’s about creating lasting memories with loved ones.
                </p>
                <p>
                    We are also deeply committed to our community.
                    Brees Pizzeria actively participates in local events and supports initiatives that promote family values and togetherness.
                    We love being a part of the neighborhood and strive to make a positive impact through our involvement.
                    Whether you choose to dine in, take out, or enjoy our convenient delivery service, we invite you to experience the warmth of Brees Pizzeria.
                    Join us for a slice of happiness and discover why we are your go-to destination for authentic Italian cuisine.
                    Thank you for being a part of our story—we can’t wait to serve you!
                </p>
            </div>
        </div>
    );
};

export default About;