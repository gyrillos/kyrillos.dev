import "./About.css"
import corpPhoto from "../assets/Kyrillos_corperate_photo.png"
// add nice title and format well with css and add new lines to the p div
// at the bottom add the contact box with the email and box for text using the api/message post request
function About() {
    return (
        <div className="about">
            <img scr={corpPhoto} alt="Profile"/>
            <p>Hi! My name is Kyrillos Abdelshaheed. I'm a software engineer from Suffolk, VA. I attending Christopher Newport University where for my senior capstone a <strong className="Header-emphasis-link">AI Full Stack Application</strong> that led to my first job at a small medical pratice. The application adds an AI solution to a long data processing issue that the pratice had. \n\n I'm a new grad looking for opportunities as my role at the practice is coming to end as they hired me to make my capstone production ready. Outside of software, I enjoying working out, golfing, almost any sport or activity and talking with good people. I enjoying making projects that automate my life and innovate industries.</p>
        </div>
    );
}

export default About;