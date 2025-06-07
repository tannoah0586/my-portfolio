import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css"; // Optional external styles

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="projects-section">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p className="description">{project.description}</p>
            <p className="tech">
              <strong>Tech Stack:</strong> {project.tech.join(", ")}
            </p>

            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <FaGithub /> GitHub
                </a>
              )}

              {project.githubFrontend && (
                <a
                  href={project.githubFrontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Frontend GitHub"
                >
                  <FaGithub /> Frontend
                </a>
              )}

              {project.githubBackend && (
                <a
                  href={project.githubBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Backend GitHub"
                >
                  <FaGithub /> Backend
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Live Site"
                >
                  <FaExternalLinkAlt /> Live Site
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
