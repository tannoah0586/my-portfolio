import React from "react";

const About = () => {
  return (
    <section id="about">
      <div style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.8", fontSize: "1.15rem" }}>
        <h1 style={{ fontSize: "2.4rem", marginBottom: "1.5rem", fontWeight: 700 }}>About Me</h1>
        
        <p style={{ marginBottom: "1.2rem" }}>
          I am a Technical Supply Chain Leader who bridges the gap between enterprise logistics and modern software development. Combining over a decade of healthcare logistics expertise with formal full-stack training from General Assembly, I build the custom automation tools, data pipelines, and responsive UIs that legacy supply chains need.
        </p>

        <p style={{ marginBottom: "1.2rem" }}>
          Specializing in the MERN stack (MongoDB, Express, React, Node.js), I focus on turning fragmented operational data into compliant, automated systems. My experience ranges from writing custom API integration scripts to engineering real-time tracking control towers with automated event alerting mechanisms.
        </p>

        <p style={{ marginBottom: "1.2rem" }}>
          My current focus is on automating mundane, time-consuming day-to-day operations to eliminate human error and free up critical bandwidth for high-value strategic initiatives. I excel at delivering these fast, secure tech solutions within corporate frameworks to wipe out manual friction.
        </p>

        <p style={{ marginBottom: "2rem" }}>
          Outside of engineering architecture, I am dedicated to high-performance athletic training and traveling with my family.
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
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Connect with me on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default About;