import React from 'react';

const Navbar = () => {
    return (
        <nav style={{ position: "fixed", top: 0, width: "100%", backgroundColor: "#fff", padding: "1rem", zIndex: 1000 }}>
      <a href="#home" style={linkStyle}>Home</a>
      <a href="#about" style={linkStyle}>About</a>
      <a href="#projects" style={linkStyle}>Projects</a>
      <a href="#skills" style={linkStyle}>Skills</a>
      <a href="#contact" style={linkStyle}>Contact</a>
      </nav> 
    );
};

const linkStyle = {
  marginRight: "1rem",
  textDecoration: "none",
  color: "#333",
  fontWeight: "bold",
};

export default Navbar;