import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import SkillsSection from './components/SkillsSection';
import Resume from './components/Resume';
import Contact from './components/Contact';

import skills from './data/skills';
import projects from './data/projects';

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faJs,
  faHtml5,
  faCss3Alt,
  faReact,
  faNodeJs,
  faGitAlt,
  faGithub,
  faNpm,
} from '@fortawesome/free-brands-svg-icons';

library.add(faJs, faHtml5, faCss3Alt, faReact, faNodeJs, faGitAlt, faGithub, faNpm);

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects projects={projects} />
        <SkillsSection skills={skills} />
        {/* <Resume /> */}
        <Contact />
      </main>
    </>
  );
}

export default App;
