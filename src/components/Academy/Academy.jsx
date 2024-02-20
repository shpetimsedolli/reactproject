import React from "react";
import "./academy.css";
import pexels from "../../assets/pexels-rodnae-productions-6517095.png";

const Academy = () => {
  return (
    <div className="academy" id="academypage">
      <div className="container">
        <div className="academywrap" data-aos="flip-left">
          <img className="academy__img2" src={pexels} alt="" />
          <div className="academy__content">
            <h1>
              LanguageKos Academy <br />
              Explained
            </h1>
            <p>
              The online academy learning method is based on the newest research
              and practical insights. From research we for exmpla know the
              importance of repetition and spaced learning.
            </p>
            <button className="navbar__btn active-btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academy;
