import React from "react";

import "./About.css";

import TransformDesktop from "/assets/Desktop/image-transform.jpg";
import TransformMobile from "/assets/Mobile/image-transform.jpg";

import StandOutDesktop from "/assets/Desktop/image-stand-out.jpg";
import StandOutMobile from "/assets/Mobile/image-stand-out.jpg";

const About = () => {
  return (
    <div className="About" id="About">
      <div className="container">
        <div className="section-container">
          <div className="section">
            <div className="image">
              <picture>
                <source media="(min-width: 768px)" srcSet={TransformDesktop} />
                <img src={TransformMobile} alt="" />
              </picture>
            </div>
            <div className="details">
              <div className="text-Container">
                <div className="title">
                  <h1>Transform your brand</h1>
                </div>
                <div className="subtitle">
                  We are full-service creative agency specializing in helping
                  brands grow fast. Engage your clients through compelling
                  visuals that do most of the marketing for you.
                </div>
                <div className="link">
                  <a href="">Learn More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="image">
              <picture>
                <source media="(min-width: 768px)" srcSet={StandOutDesktop} />
                <img src={StandOutMobile} alt="" />
              </picture>
            </div>
            <div className="details">
              <div className="text-Container">
                <div className="title">
                  <h1>Stand out for the right Audience</h1>
                </div>
                <div className="subtitle">
                  Using a collaborative formula of designers, researchers,
                  photographers, videographers, and copywriters, we'll build and
                  extend your brand in digital spaces.
                </div>
                <div className="link">
                  <a href="">Learn More</a>
                  <div className="border">Border</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
