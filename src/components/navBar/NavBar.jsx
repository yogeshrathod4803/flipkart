import React from "react";
import "./NavBar.css";
import flipkartLogo from "../../assets/flipkart logo.svg";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={flipkartLogo} alt="flipKart logo" />
        </div>

        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="search-input"
          />
        </div>

        <ul className="navbar-menu">
          <li className="navbar-item login-nav">Login</li>
          <li className="navbar-item cart-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span>Cart</span>
          </li>
          <li className="navbar-item seller">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
              alt="seller"
            />
            <span>Become a Seller</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
