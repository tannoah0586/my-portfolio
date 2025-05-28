const Projects = () => {
  const projects = [
    {
      title: "Crypto Price Tracker",
      description: "A web app that tracks cryptocurrency prices using the CoinGecko API, built with Airtable automation.",
      tech: ["React", "JavaScript", "Airtable", "CoinGecko API"],
      github: "https://github.com/yourusername/crypto-tracker",
      live: "https://crypto-tracker.netlify.app"
    },
    {
      title: "Task Manager",
      description: "A full-stack to-do app with user authentication and MongoDB backend.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/yourusername/task-manager",
      live: "https://taskmanager.netlify.app"
    }
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <div key={index} style={{ marginBottom: '2rem' }}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p><strong>Tech Stack:</strong> {project.tech.join(", ")}</p>
          <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a> |{" "}
          <a href={project.live} target="_blank" rel="noopener noreferrer">Live Site</a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
