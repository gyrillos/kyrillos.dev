import "./Home.css"
import Navbar from "../Navbar/Navbar";
import Welcome from "../Welcome/Welcome";
import Featured from "../Featured/Featured";
import Contact from "../Contact/Contact";
import Commits from "../Commits/Commits";
import {useEffect} from "react";

function Home() {
    useEffect(() => {
        fetch("https://portfolio-api.kyrillos.dev/api/github/loadgit", {
            method: "POST"
        }); 
    }, []);
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