import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
      <img
        src="/Professional Photoshoot 1.JPG"
        alt="Noah Tan Photo"
        style={{
          borderRadius: "50%",
          width: "160px",
          height: "160px",
          objectFit: "cover",
          marginBottom: "1rem"
        }}
      />

      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Hi, I'm Noah Tan 👋
      </h1>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#555" }}>
        Supply Chain Leader turned Full-Stack Developer
      </h2>
      <p style={{ maxWidth: "600px", margin: "0 auto 2rem", fontSize: "1.1rem", lineHeight: "1.6" }}>
        With a decade of experience in logistics and a passion for software engineering, I bridge business needs and code. 
        I enjoy building tools that improve efficiency, automate operations, and solve real-world problems — especially in fast-moving industries like healthcare and supply chain.
      </p>

      <div style={{ marginTop: "2rem" }}>
        <Link to="/projects" style={buttonStyle}>View Projects</Link>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ ...buttonStyle, marginLeft: "1rem" }}>
          Download Resume
        </a>
      </div>
    </section>
  );
};

const buttonStyle = {
  display: "inline-block",
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  backgroundColor: "#007bff",
  color: "#fff",
  borderRadius: "6px",
  textDecoration: "none",
  transition: "background-color 0.3s",
};

export default Home;
