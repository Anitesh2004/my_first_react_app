import React from "react";
import "./HeroStyles.css";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero">
      <h1>Welcome to Transport Services</h1>
      <p>Your reliable choice for transportation solutions.</p>
      <br />
      {/* <a href=" " className="cta-button">Book Now</a> */}
      <ul className="cta-button">
        <li>
          <Link to="/services">Book Now</Link>
        </li>
      </ul>
    </section>
  );
}

export default Hero;
