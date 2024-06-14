import React from "react";

import "./Hero.css";

import arrow from "/assets/icon-arrow-down.svg";
import bgdesktop from "/assets/Desktop/image-header.jpg";
import bgmobile from "/assets/Mobile/image-header.jpg";
const Hero = () => {
  return (
    <div className="Hero" id="Hero">
      <div className="container">
        <picture>
          <source media="(min-width: 768px)" srcSet={bgdesktop} />
          <img src={bgmobile} alt="" />
        </picture>
        <div className="Main-Text">
          <h1>WE ARE CREATIVES</h1>
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
