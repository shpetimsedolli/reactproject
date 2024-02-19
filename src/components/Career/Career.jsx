import React from "react";
import "./career.css";

const Career = () => {
  return (
    <div className="career" id="careers" data-aos="fade-right">
      <h3>Open your world to new career opportunities</h3>
      <div className="container">
        <div className="careerwrap">
          <div className="careerbox">
            <div className="image">
              <i className="bi bi-stopwatch"></i>
            </div>
            <p>10 minutes a day</p>
            <span>
              Take a time to focus and start <br />
              learning new languages
            </span>
          </div>
          <div className="careerbox">
            <div className="image">
              <i className="bi bi-lightbulb"></i>
            </div>
            <p>100+ Online Courses</p>
            <span>
              Choose from over 100+ online courses for every language.
            </span>
          </div>
          <div className="careerbox">
            <div className="image">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <p>Valuable Certificates</p>
            <span>
              Take a time to focus and start <br />
              learning new languages
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
