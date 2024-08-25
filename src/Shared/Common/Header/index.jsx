import React, { useState } from "react";
import "./Header.scss";
import { FaCartShopping } from "react-icons/fa6";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-router-dom";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };
  return (
    <div className="header">
      <div className={`sidenav ${isNavOpen ? "open" : ""}`}>
        <div className="closebtn" onClick={closeNav}>
          &times;
        </div>
        <Link className="menu-item" to={"/"}>
          Home
        </Link>
        <div className="menu-item category">About</div>
        <Link className="menu-item" to={"/"} onClick={closeNav}>
          Shop
        </Link>
        <Link className="menu-item" to={"/Profile"} onClick={closeNav}>
          Profile
        </Link>
      </div>

      <div className="bg-color">
        <div className="Container head-flex">
          <div className="logo">
            <a href="#">
              <p>CeramicShop</p>
            </a>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <Link to={"/"}>HOME</Link>
              </li>
              <li>
                <Link to={"/"}>ABOUT</Link>
              </li>
              <li>
                <Link to={"/"}>SHOP</Link>
              </li>
              <li>
                <Link to={"/Profile"}>PROFILE</Link>
              </li>
            </ul>
          </nav>
          <div className="cart">
            <FaCartShopping className="cart-icon" />
            <span className="cart-count">0</span>
          </div>
          <div className="menu-side">
            {isNavOpen ? (
              <div className="closebtn" onClick={closeNav}>
                &times;
              </div>
            ) : (
              <TfiMenu className="menu-icon" onClick={openNav} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
