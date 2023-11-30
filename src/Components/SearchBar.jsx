import React, { useState } from 'react';
import fighterlist from "../fighterlist.jsx";

const SearchBar = () => {
    const [searchTerm, setSearch] = useState('')
    const onChange = (e) => {
        e.target.value
    }
    const onSearch = (searchTerm) => {
        console.log(searchTerm)
    }

    return (
        <div>
            <div>
                <input type='text' onChange = {onChange} />
                <button onClick={() => onSearch(searchTerm)}>
                    Search
                </button>
            </div>
            <div className='dropDown'>
                {fighterlist.filter(fighters => {
                    const value = value.toLowerCase()
                    const fullName = fighters.name
                })
                    .map((fighters) =>
                    <div>
                        {fighters.name}
                    </div>
                )}
            </div>

        </div>
    );
};

export default SearchBar;
