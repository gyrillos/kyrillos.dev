import "./Welcome.css"
import {FaGithub, FaLinkedin} from "react-icons/fa";

function Welcome() {
    return(
        <div className="Welcome">
            <h1 className="Header">Hello! My Name is <strong className="Header-emphasis">Kyrillos</strong></h1>
            <p className="Summary">I'm a <strong className="Header-emphasis">Software Engineering</strong> new grad from <strong className="Header-emphasis-link">Christopher Newport University</strong>. At my time at <br></br>
                CNU I created an <strong className="Header-emphasis-link">AI Full Stack Application</strong> for my Senior Capstone Project. This project<br></br> 
                helped me land a job at a small practice in Cheasapeake, VA, where I work today, scaling<br></br> 
                the project I created in college. Seeing the real life implications of my work is what keeps<br></br> 
                me building. 
            </p>
            <div className="Socials"><FaGithub/></div>
        </div>
    );
}

export default Welcome;