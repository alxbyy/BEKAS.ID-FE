import React from 'react';
import './Hero.css';
import heroimage from "../Assets/hero2.png";
import heroimage2 from "../Assets/hero3.png";


const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <img src={heroimage2} alt="Image 1" />
        </div>
        <div className='hero-right'>
            <img src={heroimage} alt="Image 1" />
        </div>
    </div>
  )
}

export default Hero