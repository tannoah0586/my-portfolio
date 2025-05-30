import React from 'react';

const ProjectCard = ({ 
    project: {
    title,
    description,
    tech,
    github,
    githubFrontend,
    githubBackend,
    live,}
 }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1.5rem',
      marginBottom: '2rem',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Tech Stack:</strong> {tech.join(", ")}</p>
      
      {github && (
        <p>
          <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      )}

      {githubFrontend && githubBackend && (
        <p>
          <a href={githubFrontend} target="_blank" rel="noopener noreferrer">Frontend GitHub</a> |{" "}
          <a href={githubBackend} target="_blank" rel="noopener noreferrer">Backend GitHub</a>
        </p>
      )}

      {live && (
        <p>
          <a href={live} target="_blank" rel="noopener noreferrer">Live Site</a>
        </p>
      )}
    </div>
  );
};

export default ProjectCard;
