import ProjectCard from "./ProjectCard";

const Projects = ({ projects }) => {
  return (
    <section id="projects">
      <div style={{ padding: "2rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Projects</h1>

        {projects?.length ? (
          projects.map((project, index) => (
            <ProjectCard key={project.title || index} project={project} />
          ))
        ) : (
          <p>No projects available right now.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
