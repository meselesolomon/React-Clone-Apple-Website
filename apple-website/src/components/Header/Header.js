import React from "react";

import logo from "../../images/logo.png";
import search from "../../images/search-icon.png";
import cart from "../../images/cart.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="header-wrapper">
        <div className="internal-wrapper">
          <ul className="header-links">
            <li>
              <Link to="/">
                <img src={logo} className="logo-link" alt="logo" />
              </Link>
            </li>
            <li>
              <Link to="/mac">Mac</Link>
            </li>
            <li>
              <Link to="ipad">iPad</Link>
            </li>
            <li>
              <Link to="/iphone">iPhone</Link>
            </li>
            <li>
              <Link to="/watch">Watch</Link>
            </li>
            <li>
              <Link to="/vision">Vision</Link>
            </li>
            <li>
              <Link to="/airpad">AirePods</Link>
            </li>
            <li>
              <Link to="tv">Tv & Home</Link>
            </li>
            <li>
              <Link to="/entertainment">Entertainment</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
            <li>
              <Link to="/search">
                <img src={search} className="search-link" alt="search" />
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <img src={cart} className="cart-link" alt="cart" />
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
