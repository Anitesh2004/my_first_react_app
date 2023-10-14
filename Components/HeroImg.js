import React from 'react'
import "./HeroImgStyles.css"
import IntroImg from "../assets/back_G.jpeg"
import { Link } from 'react-router-dom'
const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={IntroImg}
            alt="IntroImg"/>
        </div>
        <div className='content'>
            <p>abc</p>
            <h1>abc</h1>
            <div>
                <Link to="/services" className='btn'>Services</Link>
                <Link to="/contact" className='btn btn-light'>Contact</Link>
            </div>
        </div>






    </div>
  )
}

export default HeroImg