import React from "react";

import "./Scope.css";

import GraphicDesktop from "/assets/Desktop/image-graphic-design.jpg";
import GraphicMobile from "/assets/Mobile/image-graphic-design.jpg";

import PhotographyDesktop from "/assets/Desktop/image-photography.jpg";
import PhotographyMobile from "/assets/Mobile/image-photography.jpg";

const Scope = () => {
  return (
    <div className="Scope" id="Scope">
      <div className="container">
        <div className="section-container">
          <div className="section">
            <div className="image">
              <picture>
                <source media="(min-width: 768px)" srcSet={GraphicDesktop} />
                <img src={GraphicMobile} alt="" />
              </picture>
            </div>
            <div className="details">
              <div className="title">
                <h1>Graphic Design</h1>
              </div>
              <div className="subtitle">
                <p>
                  Great design makes you memorable. We deliver artwork that
                  underscores your brand message and capture potential clients'
                  attention.
                </p>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="image">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet={PhotographyDesktop}
                />
                <img src={PhotographyMobile} alt="" />
              </picture>
            </div>
            <div className="details">
              <div className="title">
                <h1>Photography</h1>
              </div>
              <div className="subtitle">
                <p>
                  Increase your credibility by getting the most stunning,
                  high-quality photos that improves your business image.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scope;
