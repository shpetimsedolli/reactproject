import React from "react";
import "./ceo.css";
import andrea from "../../assets/pexels-andrea-piacquadio-832998.svg";

const Ceo = () => {
  return (
    <div className="ceo">
      <div className="container">
        <div className="ceowrap">
          <img className="academy__img" src={andrea} alt="" />
          <div className="ceo__content">
            <p>
              Language Kos helped me learn you are responsible for you own
              future. I was about to travel for work in France but I didn't know
              their language, thanks to them I learned it all, I am very
              grateful.
            </p>
            <span>JIM KENNEDY - CEO & FOUNDER KEYS</span>
          </div>
        </div>
        <h6>
          Are you ready to learn new languages and <br />
          explore new cultures ?
        </h6>
      </div>
    </div>
  );
};

export default Ceo;
