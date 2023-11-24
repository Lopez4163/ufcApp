import React from "react";
import "../styling/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>test</h1>
      <img src="logo.png" alt="Logo" className="navbar-logo" />
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#fighters">Fighters</a>
      {/* Add more links as needed */}
    </div>
  );
};

export default Navbar;
