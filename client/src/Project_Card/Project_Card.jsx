import "./Project_Card.css"
// add project card for each project will most likey need to use props
function Project_Card({ project, featured = false }) {
    const description = project?.descritpion;
    const techStack = Array.isArray(project?.techStack) ? project.techStack : [];
    const latestCommit = Array.isArray(project?.commits) ? project.commits[0] : "";
    const commitMessage = latestCommit ? latestCommit.split("|")[0].trim() : "";
    const readme = project?.readme;

    function loadReadme() {
        const activeReadme = document.querySelector(".project_readme-overlay");
        if (activeReadme) {
            activeReadme.querySelector(".project_readme-close")?.focus();
            return;
        }

        const overlay = document.createElement("div");
        overlay.className = "project_readme-overlay";

        const modal = document.createElement("div");
        modal.className = "project_readme-modal";
        modal.setAttribute("role", "dialog");
        modal.setAttribute("aria-modal", "true");
        modal.setAttribute("aria-labelledby", "project_readme-title");

        const header = document.createElement("div");
        header.className = "project_readme-header";

        const title = document.createElement("h2");
        title.id = "project_readme-title";
        title.textContent = project?.name ? `${project.name}` : "Project README";

        const closeButton = document.createElement("button");
        closeButton.className = "project_readme-close";
        closeButton.type = "button";
        closeButton.setAttribute("aria-label", "Close README");
        closeButton.textContent = "X";

        const content = document.createElement("div");
        content.className = "project_readme-content";
        const readmeText = readme || "README content is not available for this project yet.";

        readmeText.split("\n").forEach((line) => {
            const headerMatch = line.match(/^(#{1,6})\s+(.*)$/);

            if (headerMatch) {
                const readmeHeader = document.createElement("h3");
                readmeHeader.className = "project_readme-content-header";
                readmeHeader.textContent = headerMatch[2];
                content.appendChild(readmeHeader);
                return;
            }

            const readmeLine = document.createElement("p");
            readmeLine.className = "project_readme-line";
            readmeLine.textContent = line;
            content.appendChild(readmeLine);
        });

        function closeReadme() {
            document.body.classList.remove("project_readme-open");
            document.removeEventListener("keydown", closeOnEscape);
            overlay.remove();
        }

        function closeOnEscape(event) {
            if (event.key === "Escape") {
                closeReadme();
            }
        }

        closeButton.addEventListener("click", closeReadme);
        overlay.addEventListener("click", (event) => {
            if (event.target === overlay) {
                closeReadme();
            }
        });
        document.addEventListener("keydown", closeOnEscape);

        header.append(title, closeButton);
        modal.append(header, content);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
        document.body.classList.add("project_readme-open");
        closeButton.focus();
    }

    return (
        <article className={featured ? "project_card project_card-featured" : "project_card"} onClick={loadReadme}>
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
