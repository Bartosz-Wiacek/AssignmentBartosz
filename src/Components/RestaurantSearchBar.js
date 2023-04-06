import React, { useState } from "react";
import "./RestaurantSearchBar.css"; // import the CSS file

function RestaurantSearchBar({ handleSearch }) {
  // Initialize the state for the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Handle the change in the search input
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by restaurant name"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default RestaurantSearchBar;
