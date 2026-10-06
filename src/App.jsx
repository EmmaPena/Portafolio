import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import CinematicBreak from './sections/CinematicBreak';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Reveal from './components/Reveal';

import ProjectDetails from './pages/ProjectDetails';

function Home() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />

                <Reveal>
                    <About />
                </Reveal>

                <Reveal>
                    <Projects />
                </Reveal>

                <Reveal>
                    <Skills />
                </Reveal>

                <Reveal>
                    <Education />
                </Reveal>

                <Reveal>
                    <CinematicBreak />
                </Reveal>

                <Reveal>
                    <Contact />
                </Reveal>
            </main>

            <Footer />
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/projects/:projectId"
                    element={<ProjectDetails />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;