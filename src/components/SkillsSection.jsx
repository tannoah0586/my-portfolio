import SkillCard from "../components/SkillCard";
import "./SkillsSection.css";

const SkillsSection = ({ skills: { frontend, backend, tools } }) => {
  return (
    <section id="skills" className="skills-section">
      <h1 className="skills-title">Skills</h1>

      <div className="skills-grid">
        <div className="skill-category">
          <h3>Frontend</h3>
          <ul className="skill-list">
            {frontend.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </ul>
        </div>

        <div className="skill-category">
          <h3>Backend</h3>
          <ul className="skill-list">
            {backend.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </ul>
        </div>

        <div className="skill-category">
          <h3>Tools</h3>
          <ul className="skill-list">
            {tools.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
