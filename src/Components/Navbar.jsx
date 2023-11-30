import React, { useState } from "react";
import "../styling/Navbar.css";
import SearchBar from "./SearchBar.jsx";

const Navbar = () => {



    return (
        <nav className="navbar">
            <h1>UFC Fighters</h1>
            <SearchBar  />
            <div className='navbar-content'>
                <img src="logo.png" alt="Logo" className="navbar-logo" />
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#fighters">Fighters</a>
            </div>
        </nav>
    );
};

export default Navbar;
