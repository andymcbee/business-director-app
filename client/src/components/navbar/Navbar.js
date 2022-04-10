import React, { useEffect, useState } from "react";
import "./styles.css";
import { Link, useLocation } from "react-router-dom";
import * as actionType from "../../constants/actionTypes";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const testVar = useSelector((state) => state.authData);
  useEffect(() => {
    console.log(user);
    setUser(JSON.parse(localStorage.getItem("profile")));
    console.log("LOcation changed");
    console.log(user);
  }, [location]);

  useEffect(() => {
    console.log("testVar");
    console.log(testVar);

    console.log("testVar");
  });

  const handleUserLogout = () => {
    dispatch({ type: actionType.LOGOUT });
  };

  return (
    <div className="navBar ">
      <div className="navLogo">Logo</div>
      {user && <div>ONLY FOR LOGGED IN USERS</div>}{" "}
      <div className="navRightSide">
        <div className="navMenuLinks rightNavSection">
          <Link to="/" className="link">
            <div className="menuLinkItem">Home</div>
          </Link>

          {user && (
            <Link to="/" className="link" onClick={handleUserLogout}>
              <div className="menuLinkItem">Logout</div>
            </Link>
          )}
          {!user && (
            <Link to="/signin" className="link">
              <div className="menuLinkItem">Signin</div>
            </Link>
          )}
          {!user && (
            <Link to="/signup" className="link">
              <div className="menuLinkItem">Signup</div>
            </Link>
          )}
        </div>
        {user && (
          <div className="rightNavSection">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 navUserMenu"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
