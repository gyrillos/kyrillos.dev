import "./navbar.css"; 
import logo from "../assets/Cool_k_logo.png"

function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="navbar-img"></img>
            <ul className="navbar-list">
                <li className="navbar-item">About</li>
                <li className="navbar-item">Projects</li>
                <li className="navbar-item">Resume</li>
            </ul>
        </nav>
    );
}

export default Navbar;