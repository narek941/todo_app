import React from "react";
import logo from "../../assets/img/logo-img.png";
import "./Header.css";

const Header = () => 
    <header>
      <img className="logo_img" src={logo} alt="logo" />
      <h1>To Do List</h1>
    </header>
    
export default Header;
