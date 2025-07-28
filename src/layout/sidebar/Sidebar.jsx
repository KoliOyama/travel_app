import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  sidebarLinks,
  personalAccountLink,
} from "../../lib/constants/Navigation";
import caretDown from "../../assets/icons/CaretDown.svg"

const Sidebar = () => {
  return (
    <aside className="bg-bgWhite sticky z-40 flex-shrink rounded-sm h-[80dvh]">
      <div>
        {/* Main navigation links */}
        <nav className="w-full p-5">
          <ul className="gap-1 flex flex-col">
            {sidebarLinks.map((link) => (
              <li key={link.key}>
                <NavLink
                  to={link.path}
                  className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-light transition-colors duration-200"
                >
                  <img
                    src={link.icon}
                    alt={link.label}
                    className="w-icon-md h-icon-md"
                  />
                  <span className="text-sm font-medium text-text-primary">
                    {link.label}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Personal Account section at bottom */}
          <div className="mt-auto ">
            <Link
              to={personalAccountLink.path}
              className="flex items-center gap-3 px-4 py-3 rounded-md bg-bgGray hover:bg-light transition-colors duration-200"
            >
              <div className="flex gap-1 items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551692703-a06c2d31ae51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5pZ2VyaWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
                    alt={personalAccountLink.key}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-text-primary">
                  {personalAccountLink.label}
                </span>
              </div>
              <div>
                <img src={caretDown} alt="caret up" className="rotate-180 w-icon-md h-icon-sm"/>
                <img src={caretDown} alt="caret down" className="w-icon-md h-icon-sm"/>
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
