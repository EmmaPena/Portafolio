function Hero() {
    return (
        <section className="hero">
            <div className="hero-glow"></div>

            <div className="hero-content">
                <p className="hero-label">
                    SOFTWARE DEVELOPER
                </p>

                <h1>
                    EMMANUEL PEÑA
                </h1>

                <p className="hero-subtitle">
                    &amp; SYSTEMS ENGINEER
                </p>

                <p className="hero-description">
                    I build digital experiences through code,
                    curiosity and creativity.
                </p>

                <div className="hero-buttons">
                    <a href="#projects" className="button button-primary">
                        View Projects
                    </a>

                    <a
                        href="https://github.com/EmmaPena"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button button-secondary"
                    >
                        GitHub →
                    </a>
                </div>
            </div>

            <div className="hero-scroll">
                <span></span>
                <p>SCROLL</p>
            </div>
        </section>
    );
}

export default Hero;
