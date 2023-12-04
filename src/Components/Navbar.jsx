import React, { useState } from "react";
import "../styling/Navbar.css";
import SearchBar from "./SearchBar.jsx";
import GenderFiltersButton from "./GenderFiltersButton.jsx";

// eslint-disable-next-line react/prop-types
const Navbar = ({ onShowAll, onShowMale, onShowFemale, onSearch }) => {
  return (
    <nav className="navbar">
      <h1>UFC Fighters</h1>
      <SearchBar
          onSearch={onSearch}
      />
        <GenderFiltersButton
            onShowAll={onShowAll}
            onShowMale={onShowMale}
            onShowFemale={onShowFemale}
        />
        <div className="navbar-content"></div>
    </nav>
  );
};

export default Navbar;
