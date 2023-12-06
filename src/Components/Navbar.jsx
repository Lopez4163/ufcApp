import React, { useState } from "react";
import "../styling/Navbar.css";
import SearchBar from "./SearchBar.jsx";
import GenderFiltersButton from "./GenderFiltersButton.jsx";
import logo from '../assets/Logo-UFC.png';

// eslint-disable-next-line react/prop-types
const Navbar = ({ onShowAll, onShowMale, onShowFemale, onSearch }) => {
  return (
    <nav className="navbar">
        <ul>
            <li className='logo-items'>
                <img src={logo} alt="UFC Logo" className='nav-logo' />
                <h3 className='logo-text'>Fighter Library</h3>
                <span className='poweredby-items'>Powered By: <br /><i className="fa-brands fa-react"></i></span>
            </li>
            <li>
            </li>

        <li>
            <SearchBar
                className="search-bar"
                onSearch={onSearch}
            />
        </li>
        <li className='filter-buttons'>
            <GenderFiltersButton
                onShowAll={onShowAll}
                onShowMale={onShowMale}
                onShowFemale={onShowFemale}
            />
        </li>
    </ul>
    </nav>
  );
};

export default Navbar;
