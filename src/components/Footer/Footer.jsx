import React from "react";
import "./footer.css";
import group88 from "../../assets/Group 88.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footerwrap" data-aos="zoom-in">
          <div className="footer__content">
            <div className="footer__logo">
              <img src={group88} alt="" />
              <span>LANGUAGEKOS</span>
            </div>
            <p>
              We managed to create the most completed <br />
              language courses so our students will study <br />
              easier with grammar practicing and also <br />
              conversation all over the process.
            </p>
            <h6>Subscribe to our newsletter</h6>
            <div className="footer__input">
              <input type="text" placeholder="Enter Email Address" />
              <button>Submit</button>
            </div>
          </div>
          <ul>
            <p>Get Started</p>
            <li>Become a Teacher</li>
            <li>Tearching Academy</li>
            <li>Partnership</li>
            <li>Msoje.com</li>
            <li>Enterprise</li>
            <li>Prishtina Language</li>
          </ul>
          <ul>
            <p>Our Company</p>
            <li>About Us</li>
            <li>Partners</li>
            <li>Msoje.com</li>
            <li>Our Team</li>
            <li>Our Board</li>
            <li>Blog</li>
          </ul>
          <ul>
            <p>Support</p>
            <li>Features</li>
            <li>Contact Us</li>
            <li>Msoje.com</li>
            <li>Help Centre</li>
            <li>Enterprise</li>
            <li>Status</li>
          </ul>
          <ul>
            <p>Social</p>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Linked In</li>
            <li>Dribble</li>
            <li>Youtube</li>
          </ul>
        </div>
        <div className="footer__copyright">
          <p>©2019-2021 Languagekos Group Inc. All Rights Reserved</p>
          <div className="footer__socialicons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
