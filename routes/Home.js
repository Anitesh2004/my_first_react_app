import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Hero />
      <AboutUs />

      <Footer />
    </div>
  );
};

export default Home;
