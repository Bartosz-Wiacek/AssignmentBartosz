import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import RestaurantList from "../Components/RestaurantList";

function Home() {
  return (
    <>
        <Navbar />
        <RestaurantList />
        <Footer />
    </>
  )
}

export default Home