import logo from "../Images/to-do list logo.png";
import React from "react";
const Header = () => {
  return (
    <div className="flex justify-between items-center px-24 pt-4">
      <div>
        <img className="w-24 " src={logo} alt="" />
      </div>
    </div>
  );
};

export default Header;
