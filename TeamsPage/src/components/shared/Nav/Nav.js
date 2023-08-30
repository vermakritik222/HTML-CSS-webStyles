import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <nav id="navbar" className="">
        <div className="nav-wrapper">
          <div className="logo">
            <a href="#home">
              <i className="fas fa-chess-knight"></i> Logo
            </a>
          </div>
          <ul id="menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      
      <div className="menuIcon" onClick={() => setOpenNav(!openNav)}>
        <span className="icon icon-bars"></span>
        <span className="icon icon-bars overlay"></span>
      </div>

      <div
        className="overlay-menu"
        style={
          !openNav
            ? { transform: "translateX(-100%)" }
            : { transform: "translateX(0%)" }
        }
      >
        <ul id="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
