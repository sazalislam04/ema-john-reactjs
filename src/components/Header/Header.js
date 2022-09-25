import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <div className="bg-[#1C2B35]">
      <nav className="flex justify-between items-center container">
        <img src={logo} alt="" />
        <div className="text-gray-200 text-xl header">
          <a className="mr-6" href="/home">
            Home
          </a>
          <a className="mr-6" href="/order">
            Order
          </a>
          <a className="mr-6" href="/review">
            Order Review
          </a>
          <a className="mr-6" href="/inventory">
            Manage Inventory
          </a>
          <a href="/login">Login</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
