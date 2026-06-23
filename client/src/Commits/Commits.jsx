import { useEffect, useMemo, useState } from "react";
import "./Commits.css"
// Call the api/github/projects call to the sever and the commits will have the name and the date on them, add the 3 most recent commits to the bottom of the site
function Commits() {
    const [projects, setProjects] = useState([]);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        let ignore = false;

        async function loadCommits() {
            try {
                const response = await fetch("https://portfolio-api.kyrillos.dev/api/github/projects");
                if (!response.ok) {
                    throw new Error("Unable to load commits");
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

        loadCommits();

        return () => {
            ignore = true;
        };
    }, []);

    const commits = useMemo(() => {
        return projects
            .flatMap((project) => {
                const projectCommits = Array.isArray(project.commits) ? project.commits : [];
                return projectCommits.map((commit) => {
                    const [message, ...dateParts] = commit.split("|");
                    const dateText = dateParts.join("|").trim();
                    const date = dateText ? new Date(dateText) : null;

                    return {
                        projectName: project.name,
                        message: message.trim(),
                        date,
                        dateText,
                    };
                });
            })
            .sort((first, second) => {
                const firstTime = first.date && !Number.isNaN(first.date.getTime()) ? first.date.getTime() : 0;
                const secondTime = second.date && !Number.isNaN(second.date.getTime()) ? second.date.getTime() : 0;
                return secondTime - firstTime;
            })
            .slice(0, 3);
    }, [projects]);

    function formatDate(date, fallback) {
        if (!date || Number.isNaN(date.getTime())) {
            return fallback || "Recent";
        }

        return new Intl.DateTimeFormat("en", {
            month: "short",
            day: "numeric",
            year: "numeric",
        }).format(date);
    }

    return (
        <section className="Commits">
            <div className="Commits-heading">
                <p className="Commits-label">Latest Commits</p>
            </div>

            {status === "loading" && <p className="Commits-status">Loading recent commits...</p>}
            {status === "error" && <p className="Commits-status">Recent commits are unavailable while the API is offline.</p>}

            {status === "ready" && (
                <div className="Commits-list">
                    {commits.length > 0 ? (
                        commits.map((commit) => (
                            <article className="Commit" key={`${commit.projectName}-${commit.message}-${commit.dateText}`}>
                                <div>
                                    <h3>{commit.message}</h3>
                                    <p>{commit.projectName}</p>
                                </div>
                                <time>{formatDate(commit.date, commit.dateText)}</time>
                            </article>
                        ))
                    ) : (
                        <p className="Commits-status">No recent commits have been loaded yet.</p>
                    )}
                </div>
            )}
        </section>
    );
}

export default Commits;
