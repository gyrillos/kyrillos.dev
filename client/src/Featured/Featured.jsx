import { useEffect, useState } from "react";
import "./Featured.css"
import Project_Card from "../Project_Card/Project_Card";

function Featured() {
    const [project, setProject] = useState(null);
    const [project1, setProject1] = useState(null);
    const [project2, setProject2] = useState(null);

    useEffect(() => {
        let ignore = false;

        async function loadFeaturedProject() {
            try {
                const response = await fetch("http://localhost:8080/api/github/projects");
                if (!response.ok) {
                    return;
                }

                const data = await response.json();
                if (!ignore && Array.isArray(data) && data.length > 0) {
                    setProject(data[0]);
                    setProject1(data[1]);
                    setProject2(data[2]);
                }
            } catch {
                setProject(null);
                setProject1(null);
                setProject2(null);
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
            </div>

            {project? (
                <div className="featuredProjects">
                    <Project_Card project={project} featured />
                    <Project_Card project={project1} featured />
                    <Project_Card project={project2} featured />
                </div>
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
