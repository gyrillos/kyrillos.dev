import "./About.css"
import corpPhoto from "../assets/Kyrillos_corperate_photo.png"
import Navbar from "../Navbar/Navbar";
import Contact from "../Contact/Contact";
// add nice title and format well with css and add new lines to the p div
// at the bottom add the contact box with the email and box for text using the api/message post request
function About() {
    return (
        <div className="about">
            <Navbar></Navbar>
            <main className="about-content">
                <section className="about-intro">
                    <div className="about-copy">
                        <p className="about-label">About Me</p>
                        <h1>Software engineer focused on useful, practical systems.</h1>
                        <div className="about-text">
                            <p>
                                Hi, my name is Kyrillos Abdelshaheed. I'm a software engineer from Suffolk, VA and a Christopher Newport University graduate.
                            </p>
                            <p>
                                For my senior capstone, I built an <strong className="about-emphasis">AI Full Stack Application</strong> that led to my first job at a small medical practice. The application adds an AI solution to a long data-processing workflow the practice had been handling manually.
                            </p>
                            <p>
                                I'm a new grad looking for opportunities as my role at the practice comes to an end. Outside of software, I enjoy working out, golfing, almost any sport or activity, and talking with good people. I like making projects that automate my life and bring useful ideas into real industries.
                            </p>
                        </div>
                    </div>
                    <img src={corpPhoto} alt="Kyrillos Abdelshaheed" className="about-photo"/>
                </section>
                <Contact></Contact>
            </main>
        </div>
    );
}

export default About;
