import { useEffect, useState } from "react";
import "./Featured.css"
import Project_Card from "../Project_Card/Project_Card";

function Featured() {
    const [project, setProject] = useState(null);

    useEffect(() => {
        let ignore = false;

        async function loadFeaturedProject() {
            try {
                const response = await fetch("/api/github/projects");
                if (!response.ok) {
                    return;
                }

                const data = await response.json();
                if (!ignore && Array.isArray(data) && data.length > 0) {
                    setProject(data[0]);
                }
            } catch {
                setProject(null);
            }
        }

        loadFeaturedProject();

        return () => {
            ignore = true;
        };
    }, []);

    return (
        <section className="Featured">
            <div className="Featured-copy">
                <p className="Featured-label">Featured Work</p>
                <h2 className="Featured-title">Building practical software with real-world impact.</h2>
                <p className="Featured-text">
                    I focus on full stack tools that automate long workflows, make data easier to use, and give small teams cleaner ways to get work done.
                </p>
            </div>

            {project ? (
                <Project_Card project={project} featured />
            ) : (
                <div className="Featured-placeholder">
                    <h3>AI Full Stack Application</h3>
                    <p>
                        A production-focused capstone project that brought automation and AI into a real medical-practice workflow.
                    </p>
                    <div className="project_card-tech-list">
                        <span className="project_card-tech">React</span>
                        <span className="project_card-tech">Spring Boot</span>
                        <span className="project_card-tech">AI</span>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Featured;
