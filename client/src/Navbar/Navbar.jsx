import "./navbar.css"; 
import {useNavigate} from "react-router-dom";
import logo from "../assets/monkey_logo_transparent.png"

function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="navbar-img"></img>
            <ul className="navbar-list">
                <li className="navbar-item" onClick={() => navigate("/about")}>About</li>
                <li className="navbar-item">Projects</li>
                <li className="navbar-item">Resume</li>
            </ul>
        </nav>
    );
}

export default Navbar;