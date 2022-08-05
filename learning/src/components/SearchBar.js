import React from 'react';

const SearchBar = () => {
    return (
        <div className='search-bar'>
            <span><i className="fa-solid fa-magnifying-glass"></i></span>
            <input className='search-input' placeholder='Rechercher un contact'></input>
        </div>
    );
};

export default SearchBar;