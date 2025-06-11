import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillCard = ({ skill }) => {
  return (
    <li className="skill-card">
      <FontAwesomeIcon icon={skill.icon} style={{ color: skill.color }} size="lg" />
      <span>{skill.name}</span>
    </li>
  );
};

export default SkillCard;
