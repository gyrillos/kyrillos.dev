import "./Project_Card.css"
// add project card for each project will most likey need to use props
function Project_Card({ project, featured = false }) {
    const description = project?.discritpion || project?.description || "A software project from my GitHub portfolio.";
    const techStack = Array.isArray(project?.techStack) ? project.techStack : [];
    const latestCommit = Array.isArray(project?.commits) ? project.commits[0] : "";
    const commitMessage = latestCommit ? latestCommit.split("|")[0].trim() : "";

    return (
        <article className={featured ? "project_card project_card-featured" : "project_card"}>
            <div className="project_card-header">
                <h3>{project?.name || "Untitled Project"}</h3>
                {featured && <span className="project_card-badge">Featured</span>}
            </div>
            <p className="project_card-description">{description}</p>

            {techStack.length > 0 && (
                <div className="project_card-tech-list">
                    {techStack.slice(0, 6).map((tech) => (
                        <span className="project_card-tech" key={tech}>{tech}</span>
                    ))}
                </div>
            )}

            {commitMessage && (
                <p className="project_card-commit">
                    <span>Latest commit</span>
                    {commitMessage}
                </p>
            )}
        </article>
    );
}

export default Project_Card;
