import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        number: '01',
        title: 'CONQUER',
        slug: 'conquer',
        type: 'E-commerce Web Application',
        description:
            'A web application focused on creating a complete e-commerce experience through a modern and responsive interface.',
        technologies: [
            'React',
            'JavaScript',
            'CSS',
            'Vite'
        ],
        github: 'https://github.com/EmmaPena/Conquer.git',
        featured: true
    },

    {
        number: '02',
        title: 'STOCKMASTER',
        slug: 'stockmaster',
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
        github: 'https://github.com/EmmaPena/StockMaster.git',
        featured: false
    },

    {
        number: '03',
        title: 'ANDROID NOTES',
        slug: 'android',
        type: 'Android Application',
        description:
            'A mobile notes application developed for Android using Java and XML.',
        technologies: [
            'Java',
            'Android',
            'XML'
        ],
        github: 'https://github.com/EmmaPena/Android.git',
        featured: false
    }
];

function Projects() {
    return (
        <section id="projects" className="projects section">
            <div className="section-header">
                <p className="section-label">// PROJECTS</p>

                <h2>SELECTED WORK</h2>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.number}
                        project={project}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;