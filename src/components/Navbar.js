import React from "react";
import { NavLink, Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/" className="navbar-brand">
              App Name
            </Link>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
