const About = () => {
  return (
    <section id="about">
      <div style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.8", fontSize: "1.15rem" }}>
        <h1 style={{ fontSize: "2.4rem", marginBottom: "1.5rem", fontWeight: 700 }}>About Me</h1>
        <p style={{ marginBottom: "1rem" }}>
          I'm a MERN full stack developer with a background in logistics and supply chain. I recently completed the Software Engineering Immersive at General Assembly, where I built full-stack applications using MongoDB, Express, React, and Node.js.
        </p>
        <p style={{ marginBottom: "1rem" }}>
          With over 10 years of experience leading cross-functional projects in healthcare logistics, I apply structured problem-solving to software — especially when building user dashboard UIs or operational tools that enhance business efficiency.
        </p>
        <p style={{ marginBottom: "1rem" }}>
          I’m passionate about developing real-world solutions that automate workflows and support data-driven decisions, whether for startups or large enterprises. This portfolio site reflects my journey as a React developer and showcases live, working projects.
        </p>
        <p style={{ marginBottom: "1.5rem" }}>
          When I’m not coding, you’ll find me running, traveling with my family, or exploring innovations in AI and blockchain.
        </p>
        {/* <a
          href="https://www.linkedin.com/in/noah-tan-yongxin/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#007bff",
            textDecoration: "underline",
            fontWeight: 500,
          }}
        >
          Connect with me on LinkedIn
        </a> */}
      </div>
    </section>
  );
};

export default About;
