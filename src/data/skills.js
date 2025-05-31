import { faHtml5, faCss3Alt, faJs, faReact, faNode, faPython, faGitAlt, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode, faServer } from "@fortawesome/free-solid-svg-icons";

const skills = {
  frontend: [
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3Alt },
    { name: "JavaScript", icon: faJs },
    { name: "React", icon: faReact }
  ],
  backend: [
    { name: "Node.js", icon: faNode },
    { name: "Python", icon: faPython },
    { name: "MongoDB", icon: faDatabase }
  ],
  tools: [
    { name: "Git", icon: faGitAlt },
    { name: "GitHub", icon: faGithub },
    { name: "VS Code", icon: faCode },
    { name: "Netlify", icon: faServer }
  ]
};

export default skills;
