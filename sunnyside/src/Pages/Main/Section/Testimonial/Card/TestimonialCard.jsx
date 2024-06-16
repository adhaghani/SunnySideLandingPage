import React from "react";

const TestimonialCard = (props) => {
  return (
    <div className="TestimonialCard" id="TestimonialCard">
      <img className="ProfileImage" src={props.img} alt="" />
      <p className="ReviewDetails">
        {props.details}
      </p>
      <h3 className="Name">{props.name}</h3>
      <p className="Position">{props.position}</p>
    </div>
  );
};

export default TestimonialCard;
