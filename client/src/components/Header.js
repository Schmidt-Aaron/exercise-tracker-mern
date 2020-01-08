import React from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../hooks/UserContext";

const Header = props => {
  const { logout } = props;
  const user = React.useContext(UserContext);

  const logoutCurrentUser = () => {
    console.log("logging out");
    logout(null);
  };

  return (
    <header>
      <Link to="/">
        <h1>Exercise Tracker</h1>
      </Link>
      <nav>
        <ul>
          {!user.username ? (
            <>
              <li className="nav-item">
                <NavLink to="/register">Sign Up</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login">Log In</NavLink>
              </li>
            </>
          ) : (
            <>
              <span>Hi {`${user.username}!`}</span>
              <li className="nav-item">
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <li className="nav-item">
                <span onClick={logoutCurrentUser}>Logout</span>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
