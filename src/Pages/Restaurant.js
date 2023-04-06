import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import restaurants from "../restaurants.json";
import "./pages.css";

function Restaurant() {
  // Define state variables for the component using useState hooks
  const [restaurant, setRestaurant] = useState();
  // Use the useParams hook to retrieve the restaurant ID
  const params = useParams();

  useEffect(() => {
    // Loop through the restaurants data to find the correct restaurant using the ID
    restaurants.forEach((restaurant) => {
      if (restaurant.name === params.id) {
        setRestaurant(restaurant);
        console.log(restaurant);
      }
    });
  }, []);

  return (
    <>
      <Navbar />
      {restaurant && (
        <div className="restaurant-page-wrapper">
          <div className="restaurant-page-inner">
            <h1>{restaurant.name}</h1>
            <p>{restaurant.cuisine}</p>
            <p>{restaurant.rating}</p>
          </div>
          <img src={restaurant.photo} width={200} height={200} />
        </div>
      )}
      <Footer />
    </>
  );
}

export default Restaurant;
