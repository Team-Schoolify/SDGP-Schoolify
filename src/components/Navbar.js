import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Schoolify</div>
      <div className="menu">
        <a href="#">Home</a>
        <a href="#">Resources</a>
        <a href="#">Gradebook</a>
        <a href="#">Appointment</a>
      </div>
      <div className="icons">
        <img 
        src="https://img.icons8.com/?size=100&id=10053&format=png&color=000000"
        alt="Calendar Icon"
        className="icon-svg"/>
        <img
        src="https://img.icons8.com/?size=100&id=2yC9SZKcXDdX&format=png&color=000000"
        alt="Profile Icon"
        className="icon-svg"/>
      </div>
    </nav>
  );
}

export default Navbar;