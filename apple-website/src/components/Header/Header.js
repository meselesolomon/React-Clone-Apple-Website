import React from 'react'

import logo from "../../images/logo.png";
import search from "../../images/search-icon.png";
import cart  from "../../images/cart.png";

function Header() {
  return (
    <div>
       <header className="header-wrapper">
        <div className="internal-wrapper">
          <ul className="header-links">
            <li>
              <a href="#"> <img src={logo} className="logo-link" alt="logo"/></a>
            </li>
            <li><a href="#">Mac</a></li>
            <li><a href="#">iPad</a></li>
            <li><a href="#">iPhone</a></li>
            <li><a href="#">Watch</a></li>
            <li><a href="#">Vision</a></li>
            <li><a href="#">AirePods</a></li>
            <li><a href="#">Tv & Home</a></li>
            <li><a href="#">Entertainment</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#"><img src={search} className="search-link" alt="search"/></a></li>
            <li><a href="#"><img src={cart} className="cart-link" alt="cart"/> </a></li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header