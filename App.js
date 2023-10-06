import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header'
import Hero from './Hero'
import Services from './Services'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Footer from './Footer'

import LoginSignup from './LoginSignup';

import './App.css'

function App() {
  return (
    <Router>
    <div className="App">
      
      <Header />
      <Routes>
      <Route path="/login-signup" component={LoginSignup} />
      </Routes>
      <Hero />
    <Services />
    <AboutUs />
    <Contact />
    <Footer />
    </div>
    </Router>
    
  );
}

export default App;
