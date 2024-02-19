import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";

const Menu = () => (
  <>
    <a href="#main">Home</a>
    <a href="#careers">Company</a>
    <a href="#academypage">Courses</a>
    <a href="#passions">Teachers</a>
    <a href="#service">Shop</a>
    <a href="#B">Blog</a>
    <a href="#ContactUs">Contact Us</a>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo__items">
          <img src={logo} alt="" />
          <span>LANGUAGEKOS</span>
        </div>
        <ul className="links">
          <Menu />
        </ul>
        <div className="navbar__btns">
          <img src="assets/images/cart.png" alt="" />
          <button class="navbar__btn">Login</button>
          <button class="navbar__btn active-btn">Register</button>
        </div>
        <div className="toggle-button">
          {toggleMenu ? (
            <RiCloseLine
              color="#000"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#000"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <ul className="links">
              <Menu />
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
