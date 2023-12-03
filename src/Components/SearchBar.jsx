import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearch] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <button onClick={() => setSearch("")}>Clear</button>
      <p>Searching for: {searchTerm}</p>
    </div>
  );
};

export default SearchBar;
