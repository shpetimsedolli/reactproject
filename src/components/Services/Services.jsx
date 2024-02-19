import React from "react";
import "./services.css";
import users from "../../assets/users.svg";
import group59 from "../../assets/Group 59.svg";
import group61 from "../../assets/Group 61.svg";

const Services = () => {
  return (
    <div className="services" id="service">
      <h4 className="section__tittle">
        We help you access services u cant get nowhere else
      </h4>
      <div className="servicewrap">
        <div className="service__box">
          <img src={users} alt="" className="service__icon" />
          <h5>Experienced Teachers</h5>
          <p>
            Proffesional team leaders who will <br />
            guide you throught all the course
          </p>
        </div>
        <div className="service__box">
          <img src={group59} alt="" className="service__icon" />
          <h5>High Success Rate</h5>
          <p>
            Students will get a sure-shot <br />
            success if they follow all <br />
            the helpful tips.
          </p>
        </div>
        <div className="service__box">
          <img src={group61} alt="" className="service__icon" />
          <h5>Free Books</h5>
          <p>
            Our language school provides free <br />
            books for students to achieve the <br />
            desired results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
