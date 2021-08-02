import React from 'react'

import './Search.css';

const Search = () => {
  
  return (
    <div className="search">
      <div action="#" className="search-input-group">
        <input type="text" className="search-input" placeholder="Cari menu favoritmu.."/>
        <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
};

export default Search;