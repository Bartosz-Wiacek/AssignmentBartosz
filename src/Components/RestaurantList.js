import React, { useState } from "react";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantSearchBar from "./RestaurantSearchBar";
import restaurants from "../restaurants.json";
import "./RestaurantList.css";

function RestaurantList() {
  // Define two state variables for all and filtered restaurants
  const [allRestaurants, setAllRestaurants] = useState(restaurants);

  const [filteredRestaurants, setFilteredRestaurants] =
    useState(allRestaurants);

  // Handle search term input and update filtered restaurants
  const handleSearch = (searchTerm) => {
    if (searchTerm === "") {
      setFilteredRestaurants(allRestaurants);
    } else {
      const filteredRestaurants = allRestaurants.filter((restaurant) => {
        return restaurant.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredRestaurants(filteredRestaurants);
    }
  };

  return (
    <div className="restaurant-list-wrapper">
      <RestaurantSearchBar handleSearch={handleSearch} />
      {/* Render the restaurant search bar and pass handleSearch function as a prop */}
      <div className="restaurant-list">
        {/* Map through filtered restaurants and render RestaurantInfo component for each */}
        {filteredRestaurants.map((restaurant, index) => (
          <RestaurantInfo
            key={index}
            name={restaurant.name}
            cuisine={restaurant.cuisine}
            rating={restaurant.rating}
            photo={restaurant.photo}
          />
        ))}
      </div>
    </div>
  );
}

export default RestaurantList;
