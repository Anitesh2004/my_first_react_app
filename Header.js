import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href=" ">Home</a></li>
          <li><a href=" ">Services</a></li>
          <li><a href=" ">About Us</a></li>
          <li><a href=" ">Contact</a></li>
          <li>
            <Link to="/login-signup">Login/Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
