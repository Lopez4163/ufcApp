import React from "react";
import "../styling/Navbar.css";
import SearchBar from "./SearchBar.jsx";
import GenderFiltersButton from "./GenderFiltersButton.jsx";
import logo from '../assets/Logo-UFC.png';
import EmailForm from "./EmailForm.jsx";

// eslint-disable-next-line react/prop-types
const Navbar = ({ filterFighters, onSearch }) => {
    return (
        <nav className="navbar">
            <ul className='nav-list'>
                <li className='logo-items'>
                    <img src={logo} alt="UFC Logo" className='nav-logo' />
                    <h3 className='logo-text'>Fighter Library</h3>
                    <span className='poweredby-items'>Powered By: <br /><i className="fa-brands fa-react" id='pwrby-logo'></i></span>
                </li>
                <li className='search-content-li filter-buttons search-bar'>
                    <GenderFiltersButton
                        filterFighters={filterFighters}
                    />
                    <SearchBar
                        className="search-bar"
                        onSearch={onSearch}
                    />
                </li>
                <li className='email-formn-wrapper'>
                    <EmailForm />
                </li>
            </ul>

        </nav>
    );
};

export default Navbar;