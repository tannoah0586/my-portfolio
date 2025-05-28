const Skills = () => {
  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
    backend: ["Node.js", "Express", "MongoDB", "Python", "Django"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Netlify", "Vercel"]
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Skills</h1>

      <h3>Frontend</h3>
      <ul>
        {skills.frontend.map(skill => <li key={skill}>{skill}</li>)}
      </ul>

      <h3>Backend</h3>
      <ul>
        {skills.backend.map(skill => <li key={skill}>{skill}</li>)}
      </ul>

      <h3>Tools</h3>
      <ul>
        {skills.tools.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </div>
  );
};

export default Skills;
