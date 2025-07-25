import React from "react";
import Logo from "../../assets/Logo.svg";

const Header = () => {
  return (
    <div>
      <header className="header" id="header">
        <nav className="navbar container flex justify-between h-20 items-center">
          <div className="navbar__logo">
            <img src={Logo} alt="" />
          </div>
          <div className="navbar__options flex gap-5">
            <button className="px-5 py-2 text-[#5D5DFF] text-base ">
              Sign in
            </button>
            <button className="px-5 py-2 bg-[#5D5DFF] rounded-[2px] text-white font-medium">
              Sign up
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
