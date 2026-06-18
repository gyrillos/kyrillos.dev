import "./Home.css"
import Navbar from "../Navbar/Navbar";
import Welcome from "../Welcome/Welcome";
import Featured from "../Featured/Featured";
import Contact from "../Contact/Contact";
import Commits from "../Commits/Commits";

function Home() {
    return (
        <div className="home">
            <Navbar></Navbar>
            <Welcome></Welcome>
            <Featured></Featured>
            <Contact></Contact>
            <Commits></Commits>
        </div>
    );
}

export default Home;