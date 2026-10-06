import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
    return (
        <article
            className={`project-card ${project.featured ? 'project-card-featured' : ''
                }`}
        >
            <div className="project-preview">
                <span className="project-number">
                    {project.number}
                </span>

                <span className="project-preview-title">
                    {project.title}
                </span>

                <span className="project-preview-type">
                    {project.type}
                </span>
            </div>

            <div className="project-info">
                <div>
                    <p className="project-number-label">
                        PROJECT {project.number}
                    </p>

                    <h3>{project.title}</h3>

                    <p className="project-description">
                        {project.description}
                    </p>
                </div>

                <div className="project-bottom">
                    <div className="project-tags">
                        {project.technologies.map((technology) => (
                            <span key={technology}>
                                {technology}
                            </span>
                        ))}
                    </div>

                    <Link
    to={`/projects/${project.slug}`}
    className="project-link"
>
    View Project →
</Link>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;