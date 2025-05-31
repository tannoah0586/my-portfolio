import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/projects">Projects</Link> |{" "}
        <Link to="/skills">Skills</Link> |{" "}
        <Link to="/resume">Resume</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav> 
    );
};

export default Navbar;