import {
    SiJavascript,
    SiReact,
    SiHtml5,
    SiCss,
    SiOpenjdk,
    SiAndroid,
    SiVite,
    SiGit,
    SiGithub,
    SiAndroidstudio,
    SiDocker,
    SiSpringboot,
    SiPostman,
    SiVercel,
    SiWarp,
    SiMysql,
    SiTypescript,
    SiFirebase,
    SiAngular
} from 'react-icons/si';
import { FiCode } from 'react-icons/fi';



const developmentSkills = [
    {
        name: 'Java',
        icon: SiOpenjdk,
        detail: 'Programming Language',
        color: '#ED8B00'
    },
    {
        name: 'Spring Boot',
        icon: SiSpringboot,
        detail: 'Java Framework',
        color: '#6DB33F'
    },

    {
        name: 'JavaScript',
        icon: SiJavascript,
        detail: 'Programming Language',
        color: '#F7DF1E'
    },
    {
        name: 'TypeScript',
        icon: SiTypescript,
        detail: 'Programming Language',
        color: '#3178C6'
    },

    // --- LADO A LADO: Frontend Frameworks & Libraries ---
    {
        name: 'React',
        icon: SiReact,
        detail: 'UI Library',
        color: '#61DAFB'
    },
    {
        name: 'Angular',
        icon: SiAngular,
        detail: 'Web Framework',
        color: '#DD0031'
    },

    // --- LADO A LADO: Databases / Storage ---
    {
        name: 'MySQL',
        icon: SiMysql,
        detail: 'Relational Database',
        color: '#F29111'
    },
    {
        name: 'Firebase',
        icon: SiFirebase,
        detail: 'BaaS / Database',
        color: '#FFCA28'
    },

    // --- LADO A LADO: Mobile & Tooling ---
    /*{
        name: 'Android',
        icon: SiAndroid,
        detail: 'Mobile Development',
        color: '#3DDC84'
    },*/
    /*{
        name: 'Vite',
        icon: SiVite,
        detail: 'Build Tool',
        color: '#646CFF'
    }*/

    /*{
        name: 'HTML5',
        icon: SiHtml5,
        detail: 'Markup',
        color: '#E34F26'
    },*/
    /*{
        name: 'CSS3',
        icon: SiCss,
        detail: 'Styling',
        color: '#1572B6'
    },*/
];


const tools = [
    // --- LADO A LADO: Version Control ---
    {
        name: 'Git',
        icon: SiGit,
        detail: 'Version Control',
        color: '#F05032'
    },
    {
        name: 'GitHub',
        icon: SiGithub,
        detail: 'Code Hosting',
        color: '#F2F2F2'
    },

    // --- LADO A LADO: Editors & IDEs ---
    {
        name: 'VS Code',
        icon: FiCode,
        detail: 'Code Editor',
        color: '#007ACC'
    },
    {
        name: 'Android Studio',
        icon: SiAndroidstudio,
        detail: 'IDE',
        color: '#3DDC84'
    },

    // --- LADO A LADO: DevOps & Testing ---
    {
        name: 'Docker',
        icon: SiDocker,
        detail: 'Containerization',
        color: '#2496ED'
    },
    {
        name: 'Postman',
        icon: SiPostman,
        detail: 'API Platform',
        color: '#FF6C37'
    },

    // --- LADO A LADO: Deployment & Environment ---
    {
        name: 'Vercel',
        icon: SiVercel,
        detail: 'Deployment Platform',
        color: '#000000'
    },
    {
        name: 'Warp',
        icon: SiWarp,
        detail: 'Terminal',
        color: '#00A8FF'
    }
];


function SkillCard({ skill }) {

    const Icon = skill.icon;

    return (
        <div
            className="skill-card"
            style={{ '--skill-color': skill.color }}
        >

            <div className="skill-card-icon">
                {Icon && <Icon />}
            </div>

            <div className="skill-card-content">

                <span className="skill-card-name">
                    {skill.name}
                </span>

                <span className="skill-card-detail">
                    {skill.detail}
                </span>

            </div>

        </div>
    );
}

function Skills() {

    return (
        <section id="skills" className="section skills">
            <div className="section-header">

                <span className="section-number">
                    03
                </span>

                <div>
                    <p className="section-label">
                        SKILLS
                    </p>

                    <h2>
                        Tools I use
                        <br />
                        to build.
                    </h2>
                </div>
            </div>

            <div className="skills-grid">
                <div className="skill-group">

                    <div className="skill-group-top">

                        <p className="skill-group-label">
                            01 / DEVELOPMENT
                        </p>

                    </div>

                    <div className="skill-cards-grid">
                        {developmentSkills.map((skill) => (
                            <SkillCard
                                key={skill.name}
                                skill={skill}
                            />
                        ))}
                    </div>
                </div>

                <div className="skill-group">
                    <div className="skill-group-top">

                        <p className="skill-group-label">
                            02 / TOOLS
                        </p>

                    </div>


                    <div className="skill-cards-grid">
                        {tools.map((tool) => (

                            <SkillCard
                                key={tool.name}
                                skill={tool}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
