import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../asesst/pic1__3_-removebg-preview.png";
import HeaderSocial from './HeaderSocial'

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Babarinde Ayomide</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA /> 

        <HeaderSocial />

        <div className="me">
          <img src={Me} alt="" />
        </div>

        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;
