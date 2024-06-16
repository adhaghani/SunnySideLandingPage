import React from "react";

import "./Testimonial.css";

import galleryOrange from "/assets/Desktop/image-gallery-orange.jpg";
import galleryMilk from "/assets/Desktop/image-gallery-milkbottles.jpg";
import gallerycone from "/assets/Desktop/image-gallery-cone.jpg";
import gallerySugar from "/assets/Desktop/image-gallery-sugarcubes.jpg";

import TestimonialCard from "./Card/TestimonialCard";

import custEmily from "/assets/Customer/image-emily.jpg";
import custJennie from "/assets/Customer/image-jennie.jpg";
import custThomas from "/assets/Customer/image-thomas.jpg";
const Testimonial = () => {
  return (
    <div className="Testimonial" id="Testimonial">
      <div className="container">
        <div className="title">
          <h2>CLIENT TESTIMONIALS</h2>
        </div>
        <div className="Testimonial-Container">
          <TestimonialCard
            img={custEmily}
            name="Emily R."
            position="Marketing Director"
            details="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          />
          <TestimonialCard
            img={custJennie}
            name="Jennie F."
            position="Business Owner"
            details="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
          />
          <TestimonialCard
            img={custThomas}
            name="Thomas S."
            position="Marketing Manager"
            details="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          />
        </div>
        <div className="gallery-section">
          <img src={galleryMilk} alt="" />
          <img src={galleryOrange} alt="" />
          <img src={gallerycone} alt="" />
          <img src={gallerySugar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
