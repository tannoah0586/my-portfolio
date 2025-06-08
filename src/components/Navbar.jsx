import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
      <div className="nav-logo">
        Noah  
        <span className="nav-icon-wrapper">
          <a
            href="https://linkedin.com/in/noah-tan-yongxin"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com/tannoah0586"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon"
          >
            <FaGithub size={22} />
          </a>
        </span>
      </div>


        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} color="black" /> : <FaBars size={24} color="black" />}
        </div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
