import SkillCard from "../components/SkillCard";

const SkillsSection = ({ skills: { frontend, backend, tools } }) => {
  const renderList = (title, skillArray) => (
    <section>
      <h3 style={{ marginTop: "1.5rem", marginBottom: "0.5rem" }}>{title}</h3>
      <ul>
        {skillArray.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </ul>
    </section>
  );
  return (
    <section id='skills'>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Skills</h1>
        {renderList("Frontend", frontend)}
        {renderList("Backend", backend)}
        {renderList("Tools", tools)}
      </div>
    </section>
  );
};

export default SkillsSection;
