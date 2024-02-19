import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine, RiToggleLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";

const Menu = () => (
  <>
    <a href="#Home">Home</a>
    <a href="#Company">Company</a>
    <a href="#Courses">Courses</a>
    <a href="#Teachers">Teachers</a>
    <a href="#Shop">Shop</a>
    <a href="#Blog">Blog</a>
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
