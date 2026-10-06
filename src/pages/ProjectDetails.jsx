import { Link, useParams } from 'react-router-dom';

const projects = {
    conquer: {
        title: 'CONQUER',
        type: 'E-commerce Web Application',

        description:
            'A modern e-commerce web application developed for the CONQUER clothing brand, focused on presenting fitness and sports apparel through a minimal interface and a simplified purchasing experience.',

        role:
            'Designed and developed the application using React and Vite, implementing the navigation system, product catalog, product detail pages, global cart management and WhatsApp-based ordering flow.',

        architecture:
            'The application is organized into reusable components, pages, layouts, routing, shared context and product data, allowing the project to remain structured and scalable as new features are added.',

        technologies: [
            'React',
            'Vite',
            'React Router DOM',
            'Context API',
            'JavaScript ES6+',
            'CSS3'
        ],

        features: [
            'Single Page Application navigation',
            'Product catalogs by category',
            'Dynamic product detail pages',
            'Global shopping cart',
            'Product color and size selection',
            'Automatic quantity and total management',
            'WhatsApp order generation',
            'Responsive design',
            '404 page'
        ],

        learnings:
            'This project helped strengthen my understanding of React component architecture, client-side routing, shared state management with Context API and building reusable interfaces for a complete application flow.',

        github: 'https://github.com/EmmaPena/Conquer.git'
    },

    stockmaster: {
        title: 'STOCKMASTER',
        type: 'Inventory Management',

        description:
            'A React application for managing products through CRUD operations and local data storage.',

        technologies: [
            'React',
            'JavaScript',
            'CSS',
            'Vite',
            'CRUD'
        ],

        github: 'https://github.com/EmmaPena/StockMaster.git'
    },

    android: {
        title: 'ANDROID NOTES',
        type: 'Android Application',

        description:
            'A mobile notes application developed for Android using Java and XML.',

        technologies: [
            'Java',
            'Android',
            'XML'
        ],

        github: 'https://github.com/EmmaPena/Android.git'
    }
};

function ProjectDetails() {
    const { projectId } = useParams();

    const project = projects[projectId];

    if (!project) {
        return (
            <main className="project-details">
                <h1>PROJECT NOT FOUND</h1>

                <Link to="/">
                    ← Back to portfolio
                </Link>
            </main>
        );
    }

    return (
        <main className="project-details">

            <Link to="/" className="project-back">
                ← BACK TO PORTFOLIO
            </Link>

            <section className="project-details-header">

                <p className="section-label">
                    // PROJECT
                </p>

                <h1>{project.title}</h1>

                <p className="project-details-type">
                    {project.type}
                </p>

            </section>

            <section className="project-details-content">

                <div className="project-details-block">
                    <p className="project-details-label">
                        01 / OVERVIEW
                    </p>

                    <p>
                        {project.description}
                    </p>
                </div>


                {project.role && (
                    <div className="project-details-block">
                        <p className="project-details-label">
                            02 / MY ROLE
                        </p>

                        <p>
                            {project.role}
                        </p>
                    </div>
                )}


                {project.architecture && (
                    <div className="project-details-block">
                        <p className="project-details-label">
                            03 / ARCHITECTURE
                        </p>

                        <p>
                            {project.architecture}
                        </p>
                    </div>
                )}


                <div className="project-details-block">
                    <p className="project-details-label">
                        04 / TECHNOLOGIES
                    </p>

                    <div className="project-details-tags">
                        {project.technologies.map((technology) => (
                            <span key={technology}>
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>


                {project.features && (
                    <div className="project-details-block">
                        <p className="project-details-label">
                            05 / FEATURES
                        </p>

                        <ul className="project-features">
                            {project.features.map((feature) => (
                                <li key={feature}>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}


                {project.learnings && (
                    <div className="project-details-block">
                        <p className="project-details-label">
                            06 / WHAT I LEARNED
                        </p>

                        <p>
                            {project.learnings}
                        </p>
                    </div>
                )}


                <div className="project-details-block">
                    <p className="project-details-label">
                        07 / PROJECT
                    </p>

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button button-primary"
                    >
                        VIEW ON GITHUB →
                    </a>
                </div>

            </section>

        </main>
    );
}

export default ProjectDetails;