import React from "react";
import "./RestaurantInfo.css"; // import the CSS file

function RestaurantInfo({ name, cuisine, rating, photo }) {
  // This function will be called when the restaurant card is clicked.
  // It navigates to the URL for the restaurant using its name.
  const onClick = () => {
    window.location = `${process.env.PUBLIC_URL}/#/restaurant/${name}`;
  };

  // The component renders a restaurant info card with the given information.
  // When the card is clicked, it triggers the `onClick` function.
  return (
    <div className="restaurant" onClick={onClick}>
      <div className="restaurant-text">
        <h2>{name}</h2>
        <p>{cuisine}</p>
        <p>{rating}</p>
      </div>
      <div className="restaurant-logo">
        <img src={photo} alt={name} />
      </div>
    </div>
  );
}

export default RestaurantInfo;
