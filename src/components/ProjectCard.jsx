import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1.5rem',
      marginBottom: '2rem',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p><strong>Tech Stack:</strong> {project.tech.join(", ")}</p>
      
      {project.github && (
        <p>
          <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      )}

      {project.githubFrontend && project.githubBackend && (
        <p>
          <a href={project.githubFrontend} target="_blank" rel="noopener noreferrer">Frontend GitHub</a> |{" "}
          <a href={project.githubBackend} target="_blank" rel="noopener noreferrer">Backend GitHub</a>
        </p>
      )}

      {project.live && (
        <p>
          <a href={project.live} target="_blank" rel="noopener noreferrer">Live Site</a>
        </p>
      )}
    </div>
  );
};

export default ProjectCard;
