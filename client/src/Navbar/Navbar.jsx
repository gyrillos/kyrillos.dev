import "./Navbar.css"; 
import {useNavigate} from "react-router-dom";
import logo from "../assets/monkey_logo_transparent.png"
import resume from "../assets/Resume_June_2026.pdf"

function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="navbar-img" onClick={() => navigate("/")}></img>
            <ul className="navbar-list">
                <li className="navbar-item" onClick={() => navigate("/about")}>About</li>
                <li className="navbar-item" onClick={() => navigate("/projects")}>Projects</li>
                <li className="navbar-item">
                    <a className="navbar-resume-link" href={resume} download="Kyrillos_Abdelshaheed_Resume.pdf">
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
