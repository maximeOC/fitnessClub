import React from "react";
import "./testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { useState } from "react";
const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tlength = testimonialsData.length;

  return (
    <div className="testimonials">
      <div className="left-t">
        <span>témoignages</span>
        <span className="stroke-text">Que pensent-ils </span>
        <span>de nous ?</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />

        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tlength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt="fleche de gauche "
          />
          <img
            onClick={() => {
              selected === tlength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt="fleche de droite"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
