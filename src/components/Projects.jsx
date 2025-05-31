import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ projects })=> {
  return(
    <div style ={{ padding: '2rem' }}>
      <h1>Projects</h1>
      {projects.map((project,index)=>(
        <ProjectCard key={index} project={project}/>
      ))}
    </div>
  )
}

export default Projects;