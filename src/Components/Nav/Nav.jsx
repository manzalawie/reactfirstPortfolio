/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import $ from "jquery";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
  createBrowserRouter,
} from "react-router-dom";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    $(window).on("scroll", () => {
      if ($(window).scrollTop() > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });

    return () => {
      $(window).off("scroll");
    };
  }, []);

  return (
    <>
      <div className="container relative mx-auto px-6">
        <nav
          className={`border-gray-700 bg-[#2C3E50] navContain ${
            scrolled ? "py-1" : "py-4"
          }`}
        >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <NavLink
              href=""
              className="homeLink flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-4xl font-bold whitespace-nowrap text-white">
                START FRAMEWORK
              </span>
            </NavLink>
            <button
              data-collapse-toggle="navbar-solid-bg"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-solid-bg"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className={`w-full md:block md:w-auto ${
                isMenuOpen ? "block" : "hidden"
              }`}
              id="navbar-solid-bg"
            >
              <ul className="flex flex-col mt-4 rounded-lg bg-[#2C3E50] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent text-md font-bold">
                <li>
                  <NavLink
                    to="about"
                    className="block py-2 px-3 text-white rounded  md:border-0"
                  >
                    ABOUT
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="portfolio"
                    className="block py-2 px-3 text-white rounded  md:border-0"
                  >
                    PORTFOLIO
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="contact"
                    className="block py-2 px-3 text-white rounded  md:border-0"
                  >
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
