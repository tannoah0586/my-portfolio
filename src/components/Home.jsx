import React from "react";
import "./Home.css"; // 👈 import the CSS here

const Home = () => {
  return (
    <section id="home" className="home-section">
      <img
        src="/Noah_Professional_1.webp"
        alt="Noah Tan - Technical Supply Chain Leader"
        className="home-photo-rect"
        loading="lazy"
      />

      <h1 className="home-title">
        Hi, I'm Noah Tan <span role="img" aria-label="wave">👋</span>
      </h1>

      <h2 className="home-subtitle">
        Technical Supply Chain Leader & Full Stack Automation Engineer
      </h2>

      <p className="home-description">
        I bridge the gap between complex enterprise logistics and modern software development. 
        With over a decade of domain expertise, I design and deploy full-stack automated tools, 
        custom API integration scripts, and data pipelines that optimize efficiency and solve 
        real-world operational bottlenecks in fast-moving global industries.
      </p>

      <div className="home-buttons">
        <a href="#projects" className="home-btn primary">View Systems & Projects</a>
        <a href="#contact" className="home-btn secondary">Get In Touch</a>
      </div>
    </section>
  );
};

export default Home;