const developmentSkills = [
    'JavaScript',
    'React',
    'HTML5',
    'CSS3',
    'Java',
    'Android',
    'Vite'
];

const tools = [
    'Git',
    'GitHub',
    'VS Code',
    'Android Studio'
];

const concepts = [
    'Component-Based Development',
    'CRUD',
    'Responsive Web Design',
    'SPA',
    'React Router',
    'Context API',
    'OOP'
];

const currentlyLearning = [
    {
        name: 'Java',
        status: 'active'
    },
    {
        name: 'SQL',
        status: 'active'
    },
    {
        name: 'REST APIs',
        status: 'active'
    },
    {
        name: 'Spring Boot',
        status: 'next'
    },
    {
        name: 'Testing',
        status: 'next'
    }
];

function Skills() {
    return (
        <section id="skills" className="skills section">
            <div className="section-header">
                <p className="section-label">
                    // SKILLS
                </p>

                <h2>TOOLS &amp; TECHNOLOGIES</h2>
            </div>

            <div className="skills-grid">

                <div className="skill-group">
                    <p className="skill-group-label">
                        01 / DEVELOPMENT
                    </p>

                    <div className="skill-list">
                        {developmentSkills.map((skill) => (
                            <span key={skill}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="skill-group">
                    <p className="skill-group-label">
                        02 / TOOLS
                    </p>

                    <div className="skill-list">
                        {tools.map((tool) => (
                            <span key={tool}>
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="skill-group skill-group-wide">
                    <p className="skill-group-label">
                        03 / CONCEPTS
                    </p>

                    <div className="skill-list">
                        {concepts.map((concept) => (
                            <span key={concept}>
                                {concept}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="skill-group skill-group-learning">
                    <p className="skill-group-label">
                        04 / CURRENTLY LEARNING
                    </p>

                    <div className="learning-list">
                        {currentlyLearning.map((skill) => (
                            <div
                                className="learning-item"
                                key={skill.name}
                            >
                                <span>{skill.name}</span>

                                <span
                                    className={`learning-status ${skill.status}`}
                                >
                                    {skill.status === 'active'
                                        ? '●'
                                        : '○'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Skills;