import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>Exercise Tracker</h1>
      </Link>
      <nav>
        <ul>
          <li className="nav-item">
            <NavLink to="/users">Users</NavLink>
          </li>
          <li className="nav-item">Exercises</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
