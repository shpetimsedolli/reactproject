import React from "react";
import "./passion.css";
import passion from "../../assets/passion.png";

const Passion = () => {
  return (
    <div className="passion" id="passions">
      <h3 className="section__tittle">
        Learn the language you are passionate about
      </h3>
      <div className="container">
        <div className="academywrap">
          <div className="passion__content">
            <ol>
              <li>Find the language you want to learn</li>
              <p>
                Search the language you are interested to learn online and
                choose visely what is the best one for you.
              </p>
              <li>Explore your favourite course</li>
              <p>
                Go to the courses and look what works the best for you. We have
                a rich variety of courses with proffesional teachers waiting for
                you.
              </p>
              <li>Find the language you want to learn</li>
              <p>
                Join a course full of proffessional teachers, learn with and
                from each other, guided by a team teacher.
              </p>
            </ol>
          </div>
          <img src={passion} className="academy__img" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Passion;
