import React from "react";

const About = () => {
  return (
    <section id="about">
      <div style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.8", fontSize: "1.15rem" }}>
        <h1 style={{ fontSize: "2.4rem", marginBottom: "1.5rem", fontWeight: 700 }}>About Me</h1>
        
        <p style={{ marginBottom: "1.2rem" }}>
          I am a <strong>Technical Supply Chain Leader</strong> bridging the gap between complex enterprise logistics and modern full-stack software development. With over a decade of experience driving high-impact operational efficiency in healthcare logistics, I specialize in architecting automation tools, data pipelines, and responsive dashboard UIs that eliminate friction.
        </p>

        <p style={{ marginBottom: "1.2rem" }}>
          Following a rigorous software engineering deep dive at General Assembly, I design and deploy production-ready full-stack applications using the <strong>MERN stack (MongoDB, Express, React, Node.js)</strong>. My focus is on turning fragmented operational data into living, automated interfaces—from writing custom integration scripts to building real-time event-driven tracking control towers with automated alerting mechanisms.
        </p>

        <p style={{ marginBottom: "1.2rem" }}>
          I excel in fast-paced corporate environments where legacy workflows need rapid, compliant optimization. By combining deep domain knowledge of complex freight networks with engineering capabilities, I build enterprise solutions that are architecturally sound, secure, and intuitive for global business users.
        </p>

        <p style={{ marginBottom: "2rem" }}>
          When I'm not configuring API doorways or refining system architecture, I focus on high-performance athletic training, traveling with my family, and keeping pace with innovations in AI-driven process optimization.
        </p>

        <a
          href="https://www.linkedin.com/in/noah-tan-yongxin/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#007bff",
            color: "#ffffff",
            padding: "10px 24px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "1rem",
            boxShadow: "0 2px 4px rgba(0, 123, 255, 0.2)",
            transition: "all 0.2s ease",
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#007bff"}
        >
          Connect with me on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default About;