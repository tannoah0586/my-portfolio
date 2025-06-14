import React from "react";

import "./Home.css"; // 👈 import the CSS here

const Home = () => {
  return (
    <section id="home" className="home-section">
      <img
        src="/Noah_Professional_1.webp"
        alt="Noah Tan - React Developer"
        className="home-photo-rect"
        loading='lazy'
      />

      <h1 className="home-title">
        Hi, I'm Noah Tan <span role="img" aria-label="wave">👋</span>
      </h1>

      <h2 className="home-subtitle">
        Singapore-Based Full Stack Developer | React Portfolio Website
      </h2>

      <p className="home-description">
        With over a decade of experience in logistics and a passion for software engineering,
        I bridge business needs and code. I enjoy building tools that improve efficiency,
        automate operations, and solve real-world problems — especially in fast-moving industries
        like healthcare and supply chain.
      </p>

      <div className="home-buttons">
        <a href="#projects" className="home-btn primary">View Projects</a>
        <a href="#contact" className="home-btn secondary">Contact Me</a>
      </div>
    </section>
  );
};

export default Home;
