// SearchBar.jsx
import React, { useState } from "react";
import "../styling/SearchBar.css";
import "../styling/Navbar.css";
import "../styling/OverlayEmailForm.css"
import OverlayEmailForm from "./OverlayEmailForm.jsx";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState(false);
    const [key, setKey] = useState(0);
    const [showOverlay, setShowOverlay] = useState(false);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        if (error) {
            setError(false);
        }
    };

    const handleSearch = () => {
        if (searchTerm.trim() === "") {
            setError(true);
            setKey((prevKey) => prevKey + 1);
            return;
        }

        setError(false);
        onSearch(searchTerm.toLowerCase());
    };

    // const toggleOverlay = () => {
    //     setShowOverlay((prevShowOverlay) => !prevShowOverlay);
    // };
    const toggleOverlay = () => {
        setShowOverlay(!showOverlay)
    }

    return (
        <div key={key} className={`search-bar ${error ? "error" : ""}`} id="search-baar">
            <div className="search-option">
                <input
                    type="text"
                    className="search-bar-input"
                    placeholder="Search Fighter..."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button className="search-button" onClick={handleSearch}>
                    Search
                </button>
            </div>
            <div className="newsletter-button-wrapper">
                <button onClick={toggleOverlay} className="newsletter-button">
                    Click to Subscribe
                </button>
                {showOverlay && <OverlayEmailForm onClose={toggleOverlay}/>}
            </div>
        </div>
    );
};

export default SearchBar;
