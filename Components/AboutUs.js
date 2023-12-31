import React from 'react';
import './AboutUsStyles.css'
import { Link } from "react-router-dom";
function AboutUs() {
  return (
    <section className="about-us">
      <h2>About Us</h2>
      <p>Learn about our company and our commitment to excellence.</p>
      <p> Welcome to AarKay, your trusted partner in transportation solutions. Established with a vision to redefine logistics and transportation services, we are committed to delivering excellence in every mile. With a rich history spanning 27 years, we have become a cornerstone in the industry, offering innovative and reliable transport services to clients across nation.

Our journey began with a passion for efficiency, sustainability, and customer satisfaction. Today, we stand tall as a leading name in the world of logistics, thanks to our dedicated team of professionals, cutting-edge technology, and unwavering commitment to safety and compliance.

At AarKay, we understand that each shipment carries a story, a promise, or a livelihood, and we take that responsibility seriously. Whether it's moving goods across borders, optimizing supply chains, or reducing our carbon footprint, we are here to make transportation seamless, sustainable, and secure.

Join us on this exciting journey, and experience the difference of a transport partner that's not just moving goods, but moving industries forward.</p>
      {/* <a href=" ">Read more</a> */}
      <div className='link1'>
      <Link to="/about">Read more</Link>
      </div>
    </section>
  );
}

export default AboutUs;
