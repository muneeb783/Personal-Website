import "./Toolbox.css";
import typescriptLogo from "../assets/typescript.png";
import reactLogo from "../assets/react.png";
import pythonLogo from "../assets/python.png";
import flaskLogo from "../assets/firebase.png";
import gitLogo from "../assets/git.png";
import nextjsLogo from "../assets/nextjs.png";
import gatsbyLogo from "../assets/bootstrap.png";
import android from "../assets/android.png";

const Toolbox = () => {
  return (
    <section className="section">
        <div className="toolbox">
          <h1>My Toolbox</h1>
          <div className="toolbox-grid">
            <div className="toolbox-category">
              <h2>Frontend</h2>
              <div className="tool-icons">
                <div className="typescript">
                  <img src={typescriptLogo} alt="TypeScript" />
                  <p>TypeScript</p>
                </div>
                <div className="react">
                  <img src={reactLogo} alt="React" />
                  <p>React</p>
                </div>
                <div className="nextjs">
                  <img src={nextjsLogo} alt="Next.js" />
                  <p>Next.js</p>
                </div>
                <div className="bootstrap">
                  <img src={gatsbyLogo} alt="Gatsby" />
                  <p>Bootstrap</p>
                </div>
              </div>
            </div>
            <div className="toolbox-category">
              <h2>Backend</h2>
              <div className="tool-icons">
                <div className="python">
                  <img src={pythonLogo} alt="Python" />
                  <p>Python</p>
                </div>
                <div className="fire">
                  <img src={flaskLogo} alt="Flask" />
                  <p>Firebase Auth</p>
                </div>
              </div>
            </div>
            <div className="toolbox-category">
              <h2>Others</h2>
              <div className="tool-icons">
                <div className="git">
                  <img src={gitLogo} alt="Git" />
                  <p>Git</p>
                </div>
                <div className="git">
                  <img src={android} alt="Android Studio" />
                  <p>Android Studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Toolbox;