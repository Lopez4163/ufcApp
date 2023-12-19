import React, { useState } from "react";
import "../styling/SearchBar.css"; // Assuming you have a styling file for SearchBar

// eslint-disable-next-line react/prop-types
const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState(false);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        setError(false); // Clear the error when the user starts typing
    };

    const handleSearch = () => {
        if (searchTerm.trim() === "") {
            setError(true);
            return;
        }

        setError(false); // Clear the error if there's a valid search term
        onSearch(searchTerm.toLowerCase());
    };

    return (
        <div className={`search-bar ${error ? "error" : ""}`} id='search-baar'>
            <input
                type="text"
                 className='search-bar-input'
                placeholder="Search Fighter..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button className='search-button' onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
