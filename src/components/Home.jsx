import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      style={{
        padding: "5rem 2rem",
        textAlign: "center",
        backgroundColor: "#f2f6fa",
        color: "#333",
      }}
    >
      <img
        src="/Professional Photoshoot 1.JPG"
        alt="Noah Tan"
        style={{
          borderRadius: "50%",
          width: "160px",
          height: "220px",
          objectFit: "cover",
          marginBottom: "1.5rem",
          border: "4px solid #007bff",
        }}
      />

      <h1 style={{ fontSize: "2.8rem", marginBottom: "0.5rem", fontWeight: 700 }}>
        Hi, I'm Noah Tan 👋
      </h1>
      <h2 style={{ fontSize: "1.6rem", marginBottom: "1.5rem", color: "#666", fontWeight: 500 }}>
        Supply Chain Leader turned Full-Stack Developer
      </h2>
      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          fontSize: "1.2rem",
          lineHeight: "1.8",
        }}
      >
        With over a decade of experience in logistics and a passion for software engineering, I bridge business needs and code. I enjoy building tools that improve efficiency, automate operations, and solve real-world problems — especially in fast-moving industries like healthcare and supply chain.
      </p>

      <div style={{ marginTop: "2.5rem" }}>
        <a href="#projects" style={buttonPrimary}>View Projects</a>
        {/* <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...buttonSecondary, marginLeft: "1rem" }}
        >
          Download Resume
        </a> */}
      </div>
    </section>
  );
};

const buttonPrimary = {
  display: "inline-block",
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: 600,
  transition: "all 0.3s ease",
};

const buttonSecondary = {
  ...buttonPrimary,
  backgroundColor: "#e2e6ea",
  color: "#007bff",
  border: "1px solid #007bff",
};

export default Home;
