import React, { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function TopBar() {
  // contextApi
  const [authUser, setAuthUser] = useAuth();

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //nav items
  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/course">Courses</a>
      </li>
      <li>
        <a href="/contactUs">Contact</a>
      </li>
      <li>
        <a href="/aboutUs">About</a>
      </li>
    </>
  );
  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50 ${
          sticky
            ? "sticky-navebar shadow-md bg-base-200 dark:bg-slate-600 dark:text-white duration-300 transition-all ease-in-out"
            : ""
        }`}
      >
        <div className="navbar">
          {/*Navbar start */}
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
            <a className="text-2xl font-bold cursor-pointer">
              <img src="../../public/logo-without-bg.png" className="h-1/3" alt="img not found" />
            </a>
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>     

            {/*Login Button */}
            {
              authUser ? ( <Logout/> ) : (
                <div>
                  <a
                    className="bg-black text-white mx-3 px-4 py-2 rounded-md hover:bg-slate-800 duration:300 cursor:pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </a>
                <Login />
                </div>
            )}

            
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
