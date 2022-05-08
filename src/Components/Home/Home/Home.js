import React from "react";
import Contact from "../../Pages/Contact/Contact";
import Reviews from "../../Pages/Reviews/Reviews";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <Reviews></Reviews>
      <Contact></Contact>
    </div>
  );
};

export default Home;
