import hawaiian from"../assets/hawaiian.jpg"
import "../Styles/Contact.css"

const Contact = () => {
    return (
        <div className="contact">
            <div
                className="leftSide"
                style={{ backgroundImage: `url(${hawaiian})` }}
            ></div>
            <div className="rightSide">
                <h1> Contact Us</h1>

                <form id="contact-form" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder="Enter full name..." type="text" />
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Enter email..." type="email" />
                    <label htmlFor="message">Message</label>
                    <textarea
                        rows="4"
                        placeholder="Enter message..."
                        name="message"
                        required
                    ></textarea>
                    <button type="submit"> Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
