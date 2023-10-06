import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Your Transport Company</h2>
          <p>Providing Reliable Transportation Solutions</p>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <p>Follow Us:</p>
          <a href=" " className="social-icon"><i className="fab fa-facebook"></i></a>
          <a href=" " className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href=" " className="social-icon"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Transport Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
