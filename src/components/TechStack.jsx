import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import { SiFigma } from "react-icons/si";

const TechStack = () => {
  const technologies = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      className: "html-icon",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      className: "css-icon",
    },
    {
      name: "JavaScript (ES6+)",
      icon: <FaJsSquare />,
      className: "javascript-icon",
    },
    {
      name: "React", 
      icon: <FaReact />,
      className: "react-icon",
    },
  ];

  return (
    <section id="tech-stack" className="tech-stack">
      <p className="label">TECH STACK</p>

      <h2>What I work with</h2>

      <p className="tech-intro"></p>

      <div className="tech-grid">
        {technologies.map((tech) => (
          <div className="tech-card" key={tech.name}>
            <div className={`tech-icon ${tech.className}`}>
              {tech.icon}
            </div>

            <h3>{tech.name}</h3>

            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;