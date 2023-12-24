import React, { useState } from "react";
import "../styling/SearchBar.css";
import "../styling/Navbar.css";
import EmailForm from "./EmailForm.jsx";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState(false);
    const [key, setKey] = useState(0);
    const [showOverlay, setShowOverlay] = useState(false);
    const toggleOverlay = () => {
        setShowOverlay(!showOverlay);
    };
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        if (error) {
            setError(false);
        }
    };

    const handleSearch = () => {
        if (searchTerm.trim() === "") {
            setError(true);
            setKey(prevKey => prevKey + 1);
            return;
        }

        setError(false);
        onSearch(searchTerm.toLowerCase());
    };

    return (
        <div key={key} className={`search-bar ${error ? "error" : ""}`} id='search-baar'>
            <div className='search-option'>
                <input
                    type="text"
                    className='search-bar-input'
                    placeholder="Search Fighter..."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button className='search-button' onClick={handleSearch}>Search</button>
            </div>
            <div className='newsletter-button-wrapper'>
                <button onClick={toggleOverlay} className='newsletter-button'>
                    Click to Subscribe
                </button>
                {showOverlay && (
                    <div className={`overlay ${showOverlay ? "" : "hidden"}`}>
                        <EmailForm />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchBar;