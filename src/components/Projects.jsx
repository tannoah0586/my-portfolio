import React from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = ()=> {
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