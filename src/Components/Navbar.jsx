import React, { useState } from "react";
import "../styling/Navbar.css";
import SearchBar from "./SearchBar.jsx";
import GenderFiltersButton from "./GenderFiltersButton.jsx";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>UFC Fighters</h1>
      <SearchBar />
      <GenderFiltersButton />
      <div className="navbar-content"></div>
    </nav>
  );
};

export default Navbar;
