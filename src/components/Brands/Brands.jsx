import React from "react";
import "./brands.css";
import group39 from "../../assets/Group 39.svg";
import xp7 from "../../assets/XP7E6wK2.svg";
import yves from "../../assets/yves-rocher-logo.svg";
import aa from "../../assets/aa.svg";
import layer from "../../assets/Layer 0.svg";
import dd from "../../assets/2dde905a2bf4793361d4d7dc4cdf3db3.svg";
import ed from "../../assets/1ed2649ba3bc113b76f9ee30f24be572.svg";

const Brands = () => {
  return (
    <div className="brands">
      <div className="brandswrap" data-aos="zoom-in">
        <h5>
          We are part of a initiative of the top educators around the word
        </h5>
        <div className="brands__logos">
          <img src={group39} alt="" />
          <img src={xp7} alt="" />
          <img src={yves} alt="" />
          <img src={aa} alt="" />
          <img src={layer} alt="" />
          <img src={dd} alt="" />
          <img src={ed} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
