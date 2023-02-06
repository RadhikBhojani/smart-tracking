//create component for sidebar

import React from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  //add route to sidebar
  const routes = [
    {
      name: "Dashboard",
      path: "/",
      icon: "home",
    },
    {
      name: "User",
      path: "/user",
      icon: "user",
    },
    {
      name: "User List",
      path: "/user-list",
      icon: "users",
    },
  ];

  return (
    <div className="sidebar-wrapper sidebar-theme">
      <nav id="sidebar">
        <div className="shadow-bottom"></div>

        <ul className="list-unstyled menu-categories" id="accordionExample">
          <li className="menu">
            <Link to="/home" className="dropdown-toggle">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-home"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span> Home </span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
