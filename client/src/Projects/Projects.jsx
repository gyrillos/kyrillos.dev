import { useEffect, useState } from "react";
import "./Projects.css"
import Navbar from "../Navbar/Navbar";
import Project_Card from "../Project_Card/Project_Card";
// add all the projects from the api/gihub/projects api 
function Projects() {
    const [projects, setProjects] = useState([]);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        let ignore = false;

        async function loadProjects() {
            try {
                const response = await fetch("https://portfolio-api.kyrillos.dev/api/github/projects", {
                    "method": "GET"
                });
                if (!response.ok) {
                    throw new Error("Unable to load projects");
                }

                const data = await response.json();
                if (!ignore) {
                    setProjects(Array.isArray(data) ? data : []);
                    setStatus("ready");
                }
            } catch {
                if (!ignore) {
                    setStatus("error");
                }
            }
        }

        loadProjects();

        return () => {
            ignore = true;
        };
    }, []);

    return (
        <div className="Projects">
            <Navbar></Navbar>
            <main className="Projects-content">
                <div className="Projects-heading">
                    <p className="Projects-label">Projects</p>
                </div>

                {status === "loading" && <p className="Projects-status">Loading projects...</p>}
                {status === "error" && <p className="Projects-status">Projects are unavailable while the API is offline.</p>}

                {status === "ready" && (
                    <div className="Projects-grid">
                        {projects.length > 0 ? (
                            projects.map((project) => (
                                <Project_Card project={project} key={project.id || project.name}></Project_Card>
                            ))
                        ) : (
                            <p className="Projects-status">No GitHub projects have been loaded yet.</p>
                        )}
                    </div>
                )}
            </main>
        </div>
    );
}

export default Projects;
