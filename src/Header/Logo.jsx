import React from "react";
import logo from "../assets/logo.svg";

const Logo = () => {
  return (
    <a href="./index.html">
      <img className="h-9" src={logo} alt="logo" />
    </a>
  );
};

export default Logo;
