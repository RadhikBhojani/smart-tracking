import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      console.log("User is authenticated");
      console.log(user);
      setUserData(user);
    } else {
      console.log("User is not authenticated");
    }
  }, [isLoading]);

  return (
    <div className="header-container fixed-top">
      <header className="header navbar navbar-expand-sm">
        <ul className="navbar-item theme-brand flex-row  text-center">
          <li className="nav-item theme-logo">
            <a href="index.html">
              <img
                src={"assets/img/logo.png"}
                className="navbar-logo"
                alt="logo"
              />
            </a>
          </li>
          <li className="nav-item theme-text">
            <a href="index.html" className="nav-link">
              {" "}
              {process.env.REACT_APP_APPLICATION_NAME}{" "}
            </a>
          </li>
        </ul>

        <ul className="navbar-item flex-row ml-md-auto">
          <li className="nav-item dropdown user-profile-dropdown">
            <a
              href="javascript:void(0);"
              className="nav-link dropdown-toggle user"
              id="userProfileDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <img
                src={
                  userData && userData.picture
                    ? userData.picture
                    : "assets/img/90x90.jpg"
                }
                alt="avatar"
              />
            </a>
            <div
              className="dropdown-menu position-absolute"
              aria-labelledby="userProfileDropdown"
            >
              <div className="">
                <div className="dropdown-item">
                  <Link to="/profile">
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
                      className="feather feather-user"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>{" "}
                    My Profile
                  </Link>
                </div>
                <div className="dropdown-item">
                  <a
                    className=""
                    onClick={() => {
                      logout({ returnTo: window.location.origin });
                    }}
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
                      className="feather feather-log-out"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>{" "}
                    Sign Out
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
