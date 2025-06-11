const About = () => {
  return (
    <section
      id="about"
    >
      <div style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.8", fontSize: "1.15rem" }}>
        <h1 style={{ fontSize: "2.4rem", marginBottom: "1.5rem", fontWeight: 700 }}>About Me</h1>
        <p style={{ marginBottom: "1rem" }}>
          I'm a full-stack software engineer who recently completed the Software Engineering Immersive at General Assembly. 
          During the bootcamp, I built full-stack applications using React, Node.js, Express, and MongoDB.
        </p>
        <p style={{ marginBottom: "1rem" }}>
          Currently, working in logistics and supply chain for over 10 years, leading cross-functional projects in healthcare. That background taught me to approach problems systematically and deliver practical, impactful solutions.
        </p>
        <p style={{ marginBottom: "1rem" }}>
          I’m especially passionate about building tools that streamline operations, improve decision-making, and support real-world business needs — whether it’s for a startup, SME, or large organization.
        </p>
        <p style={{ marginBottom: "1.5rem" }}>
          When I’m not coding, you’ll find me out on a run, traveling with my family, or geeking out over the latest developments in AI and blockchain.
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
