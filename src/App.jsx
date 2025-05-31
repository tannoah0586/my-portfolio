  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Home from './components/Home';
  import About from './components/About';
  import Projects from './components/Projects';
  import Skills from './components/Skills';
  import Resume from './components/Resume';
  import Contact from './components/Contact';
  import Navbar from './components/Navbar';
  import React from 'react';

  //from data
  import skills from './data/skills';
  import projects from './data/projects';

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

  library.add(
    faJs,
    faHtml5,
    faCss3Alt,
    faReact,
    faNodeJs,
    faGitAlt,
    faGithub,
    faNpm
  );


  function App() {
    return (
      <Router>
        <Navbar />
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects projects={projects}/>} />
            <Route path="/skills" element={<Skills skills={skills}/>} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1> 404 - Page Not Found</h1>}/>
          </Routes>
        </div>
      </Router>
    );
  }

  export default App;