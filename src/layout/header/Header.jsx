import React from "react";
import { Link, NavLink } from "react-router-dom";
import goPaddiLogo from "../../assets/logo.png";
import SearchField from "../../components/SearchField";
import { navLinks1, navLinks2 } from "../../lib/constants/Navigation";
import caretDown from "../../assets/icons/CaretDown.svg"

const Header = () => {
  return (
    <header className="bg-bgWhite h-20">
      <div className="flex items-center justify-between max-container h-full">
        {/* logo & search field */}
        <div className="flex items-center gap-2">
          <Link to="/trip" className="flex items-center space-x-2">
            <img src={goPaddiLogo} alt="logo" className="w-[40px] h-[40px]" />
          </Link>
          <SearchField />
        </div>

        {/* Navigation */}
        <nav className="flex items-center">
          <ul className="flex items-center text-sm">
            <li className="flex items-center gap-5">
              {navLinks1.map((link) => (
                <NavLink className="flex flex-col items-center justify-center gap-1">
                  <img
                    src={link.icon}
                    alt={link.label}
                    className="w-icon-md h-icon-md"
                  />
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </li>
          </ul>

          {/* Vertical bar */}
          <div class="mx-7 h-9 w-px bg-gray-300"></div>

          {/* --------------------------------- */}
          <ul className="flex items-center text-sm gap-5">
            <li className="flex items-center gap-5">
              {navLinks2.map((link) => (
                <NavLink className="flex flex-col items-center justify-center gap-1">
                  <img
                    src={link.icon}
                    alt={link.label}
                    className="w-icon-md h-icon-md"
                  />
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </li>

            <li className="flex gap-1 cursor-pointer">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551692703-a06c2d31ae51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5pZ2VyaWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
                  alt="Profile image"
                  className="w-full h-full object-cover"
                />
              </div>
                <img src={caretDown} alt="caret down" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
