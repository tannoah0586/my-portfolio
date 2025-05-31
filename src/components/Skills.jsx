import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = ({ skills: { frontend, backend, tools } }) => {
  const renderList = (section) => (
    <ul>
      {section.map((skill) => (
        <li key={skill.name} style={{ margin: "0.5rem 0", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <FontAwesomeIcon icon={skill.icon} /> {skill.name}
        </li>
      ))}
    </ul>
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Skills</h1>

      <h3>Frontend</h3>
      {renderList(frontend)}

      <h3>Backend</h3>
      {renderList(backend)}

      <h3>Tools</h3>
      {renderList(tools)}
    </div>
  );
};

export default Skills;
