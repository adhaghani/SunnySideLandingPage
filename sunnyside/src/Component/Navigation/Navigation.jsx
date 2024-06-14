import React from "react";

import "./Navigation.css";

import logo from "/assets/logo.svg";
const Navigation = () => {
  return (
    <div className="Navigation" id="Navigation">
      <div className="container">
        <div className="Logo">
          <img src={logo} alt="" />
        </div>
        <div className="Action">
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
          </ul>
          <button>CONTACT</button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
