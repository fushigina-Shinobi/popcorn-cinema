import React from "react";
import { Link } from "react-router-dom";
import popcornLogo from "./popcornLogo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="title-container">
          <Link to="/" className="nav-header">
            <img src={popcornLogo} alt="logo" className="logo" />
            <h3>Movie</h3>
          </Link>
        </div>
        <div className="nav-list">
          <ul className="nav-links">
            <Link to="/">
              <li className="home">Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
