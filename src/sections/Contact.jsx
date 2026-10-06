function Contact() {
    return (
        <section id="contact" className="contact section">
            <div className="contact-content">
                <div className="contact-header">
                    <p className="section-label">// CONTACT</p>

                    <h2>
                        LET'S BUILD
                        <br />
                        SOMETHING.
                    </h2>
                </div>

                <p className="contact-description">
                    I'm always interested in learning, building new
                    projects and connecting with people in the tech
                    community.
                </p>

                <div className="contact-links">
                    <a
                        href="mailto:TU_CORREO_AQUI"
                        className="contact-link"
                    >
                        <span>EMAIL</span>
                        <span>→</span>
                    </a>

                    <a
                        href="https://github.com/EmmaPena"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                    >
                        <span>GITHUB</span>
                        <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;