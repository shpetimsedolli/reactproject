import React from "react";
import "./main.css";
import america from "../../assets/united-states-of-america.svg";
import germany from "../../assets/germany.svg";
import firstimage from "../../assets/mainimage.png";

const Main = () => {
  return (
    <div className="main_content" id="main">
      <div className="container">
        <div className="mainwrap">
          <div className="main__content">
            <h1>
              Learn every language you <br />
              want in 10 minutes a day.
            </h1>
            <p>
              Pick anything from our 100+ courses and start learning <br />
              your favourite language now!
            </p>
            <div className="main__btn">
              <button className="navbar__btn active-btn">Get Started</button>
              <button className="navbar__btn">Learn more</button>
            </div>
          </div>
          <div className="main__image">
            <img src={firstimage} className="firstimage" alt="" />
            <div className="main__btns">
              <img src={america} alt="" />
              <p>Learn English</p>
            </div>
            <div className="main__btns btns2">
              <img src={germany} alt="" />
              <p>Learn German</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
