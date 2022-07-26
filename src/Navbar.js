import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="title-container">
          <Link to="/">
            <h3 className="nav-header">Popcorn Movie</h3>
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
