import SkillCard from "../components/SkillCard";

const SkillsSection = ({ skills: { frontend, backend, tools } }) => {
  const renderList = (title, skillArray) => (
    <>
      <h3>{title}</h3>
      <ul>
        {skillArray.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </ul>
    </>
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Skills</h1>
      {renderList("Frontend", frontend)}
      {renderList("Backend", backend)}
      {renderList("Tools", tools)}
    </div>
  );
};

export default SkillsSection;
