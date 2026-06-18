import "./Welcome.css"
import {FaGithub, FaLinkedin, FaArrowRight} from "react-icons/fa";
import {Link} from "react-router-dom";

function Welcome() {
    return(
        <>
        <div className="Welcome">
            <h1 className="Header">Hello! My Name is <strong className="Header-emphasis">Kyrillos</strong></h1>
            <p className="Summary">I'm a <strong className="Header-emphasis">software engineering</strong> new grad from <strong className="Header-emphasis-link">Christopher Newport University</strong>. During my time at <br></br>
                CNU I created an <strong className="Header-emphasis-link">AI Full Stack Application</strong> for my Senior Capstone Project. This project<br></br> 
                helped me land a job at a small practice in Chesapeake, VA, where I work today, scaling<br></br> 
                the project I created in college. Seeing the real-world implications of my work is what keeps<br></br> 
                me building. 
            </p>
            <div className="Socials">
                <a className="Social" href="https://github.com/gyrillos" target="_blank" rel="noreferrer"><FaGithub/> Github</a>
                <span className="Social-divider">|</span>
                <a className="Social" href="https://linkedin.com/in/kyrillos-abdelshaheed" target="_blank" rel="noreferrer"><FaLinkedin/> LinkedIn</a>
                <span className="Social-divider">|</span>
                <Link className="Social" to="/about">More About Me<FaArrowRight className="Arrow"/></Link>
            </div>
        </div>
        </>
    );
}

export default Welcome;
