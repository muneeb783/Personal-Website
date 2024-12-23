import "./Sayhi.css";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const Sayhi = () => {
    return (
        <section className="center-container">
            <h2 className="heading">Say Hi</h2>
            <h3 className="heading2">Want to collab on a project?</h3>
            <h3 className="heading2">Feel free to send me an email.</h3>
            <a href="mailto:783.muneeb@gmail.com">
                <button className="email-button">Let's Work Together!</button>
            </a>
            <h4 className="heading2">Or reach out to me here:</h4>

            <div className="social-buttons">
                <a href="https://www.instagram.com/__muneeb_ali/" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram" className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/muneeb-asif-0b7260266/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" className="social-icon" />
                </a>
                <a href="https://github.com/muneeb783" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" className="social-icon" />
                </a>
            </div>
        </section>
    );
};

export default Sayhi;