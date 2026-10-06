import { useState } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="navbar">
            <a href="#" className="navbar-logo" onClick={closeMenu}>
                EMMANUEL<span>//</span>
            </a>

            <nav className={`navbar-links ${menuOpen ? 'navbar-links-open' : ''}`}>
                <a href="#about" onClick={closeMenu}>
                    About
                </a>

                <a href="#projects" onClick={closeMenu}>
                    Projects
                </a>

                <a href="#skills" onClick={closeMenu}>
                    Skills
                </a>

                <a href="#contact" onClick={closeMenu}>
                    Contact
                </a>
            </nav>

            <button
                className={`navbar-menu ${menuOpen ? 'navbar-menu-open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
            >
                <span></span>
                <span></span>
            </button>
        </header>
    );
}

export default Navbar;