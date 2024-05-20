/** @format */

import React from "react";

const Search = ({ searchInput, handleSearchInputChange }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Country"
        value={searchInput}
        onChange={handleSearchInputChange}
      />
    </div>
  );
};

export default Search;
