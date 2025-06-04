import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNode,
  faPython,
  faGitAlt,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faCode,
  faServer
} from "@fortawesome/free-solid-svg-icons";

const skills = {
  frontend: [
    { name: "HTML", icon: faHtml5, color: "#e34c26" },
    { name: "CSS", icon: faCss3Alt, color: "#264de4" },
    { name: "JavaScript", icon: faJs, color: "#f7df1e" },
    { name: "React", icon: faReact, color: "#61dbfb" }
  ],
  backend: [
    { name: "Node.js", icon: faNode, color: "#3c873a" },
    { name: "Python", icon: faPython, color: "#3776ab" },
    { name: "MongoDB", icon: faDatabase, color: "#47A248" } // Not official but close
  ],
  tools: [
    { name: "Git", icon: faGitAlt, color: "#f34f29" },
    { name: "GitHub", icon: faGithub, color: "#181717" },
    { name: "VS Code", icon: faCode, color: "#007ACC" },
    { name: "Netlify", icon: faServer, color: "#00C7B7" } // Custom color
  ]
};

export default skills;

