import React, { useState } from "react";
import "../styling/Navbar.css";
import SearchBar from "./SearchBar.jsx";
import GenderFiltersButton from "./GenderFiltersButton.jsx";
import logo from '../assets/Logo-UFC.png';

// eslint-disable-next-line react/prop-types
const Navbar = ({ onShowAll, onShowMale, onShowFemale, onSearch, onShowStrawWeight, onShowBantamWeight, onShowFeatherWeight, onShowHeavyWeight, onShowFlyWeight, onShowLightHeavyWeight, onShowLightWeight, onShowMiddleWeight, onShowWelterWeight }) => {
  return (
    <nav className="navbar">
        <ul className='nav-list'>
            <li className='logo-items'>
                <img src={logo} alt="UFC Logo" className='nav-logo' />
                <h3 className='logo-text'>Fighter Library</h3>
                <span className='poweredby-items'>Powered By: <br /><i className="fa-brands fa-react" id='pwrby-logo'></i></span>
            </li>
            <li>
            </li>

        <li className='search-bar'>
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
                onShowStrawWeight={onShowStrawWeight}
                onShowFlyWeight={onShowFlyWeight}
                onShowBantamWeight={onShowBantamWeight}
                onShowFeatherWeight={onShowFeatherWeight}
                onShowLightWeight={onShowLightWeight}
                onShowWelterWeight={onShowWelterWeight}
                onShowMiddleWeight={onShowMiddleWeight}
                onShowLightHeavyWeight={onShowLightHeavyWeight}
                onShowHeavyWeight={onShowHeavyWeight}
            />
        </li>
    </ul>
    </nav>
  );
};

export default Navbar;
