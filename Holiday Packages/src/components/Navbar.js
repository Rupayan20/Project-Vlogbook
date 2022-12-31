import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faBell, faHeart } from "@fortawesome/free-regular-svg-icons";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <FontAwesomeIcon icon={faPlaneDeparture} />
            Vlogbook
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/hotels"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <FontAwesomeIcon icon={faPen} />
                Review
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/restaurants"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <FontAwesomeIcon icon={faHeart} />
                Trips
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/flights"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <FontAwesomeIcon icon={faBell} />
                Alerts
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/todo" className="nav-links" onClick={closeMobileMenu}>
                <FontAwesomeIcon icon={faCartArrowDown} />
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <ul className={click ? "nav-menu-two active" : "nav-menu-two"}>
        <li className="nav-item-two">
          <NavLink
            exact
            to="/"
            activeClassName="active"
            className="nav-links-two"
            onClick={click ? handleClick : null}
          >
            Hotels
          </NavLink>
        </li>
        <li className="nav-item-two">
          <NavLink
            exact
            to="/todo"
            activeClassName="active"
            className="nav-links-two"
            onClick={click ? handleClick : null}
          >
            Thing to do
          </NavLink>
        </li>
        <li className="nav-item-two">
          <NavLink
            exact
            to="/restaurants"
            activeClassName="active"
            className="nav-links-two"
            onClick={click ? handleClick : null}
          >
            Restaurants
          </NavLink>
        </li>
        <li className="nav-item-two">
          <NavLink
            exact
            to="/flights"
            activeClassName="active"
            className="nav-links-two"
            onClick={click ? handleClick : null}
          >
            Flights
          </NavLink>
        </li>
        <li className="nav-item-two">
          <NavLink
            exact
            to="/homes"
            activeClassName="active"
            className="nav-links-two"
            onClick={click ? handleClick : null}
          >
            Holiday Homes
          </NavLink>
        </li>
        <li className="nav-item-two">
          <NavLink
            exact
            to="/packages"
            activeClassName="active"
            className="nav-links-two"
            onClick={click ? handleClick : null}
          >
            Package Holidays
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
