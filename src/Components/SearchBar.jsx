import React, { useState } from "react";
import "../styling/SearchBar.css";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState(false);
    const [key, setKey] = useState(0); // Add a key state

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