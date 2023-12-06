import React, { useState } from "react";
import "../styling/SearchBar.css";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
      onSearch(searchTerm.toLowerCase());
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search Fighter.."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
