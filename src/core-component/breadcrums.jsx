//create breadcrumb component

import React from "react";
import { useState, useEffect } from "react";

const Breadcrumb = (props) => {
  const [main, setMain] = useState("");

  //get current path from url and set it to main
  useEffect(() => {
    setMain(window.location.pathname);
    if (main === "/" || main === "") {
      setMain("Dashboard");
    }
  }, []);

  return (
    <div className="sub-header-container">
      <header className="header navbar navbar-expand-sm">
        <a
          href="javascript:void(0);"
          className="sidebarCollapse"
          data-placement="bottom"
        >
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
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </a>

        <ul className="navbar-nav flex-row">
          <li>
            <div className="page-header">
              <div className="page-title">
                <h3>{main}</h3>
              </div>
            </div>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Breadcrumb;
