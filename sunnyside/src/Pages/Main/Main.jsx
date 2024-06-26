import React from "react";

import Navigation from "../../Component/Navigation/Navigation";

import Hero from "./Section/Hero/Hero";
import About from "./Section/About/About";
import Scope from "./Section/Scope/Scope";
import Testimonial from "./Section/Testimonial/Testimonial";
import Footer from "../../Component/Footer/Footer";
import "./Main.css";
const Main = () => {
  return (
    <div className="Main" id="Main">
      <Navigation />
      <Hero />
      <About />
      <Scope />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Main;
