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
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="mt-10 bg-[#2C3E50] text-white p-14 flex flex-wrap justify-center text-center mx-auto">
          <div className="w-full md:w-4/12 px-2">
            <h4 className="text-3xl font-bold mb-3">LOCATION</h4>
            <p className="mb-3">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="w-full md:w-4/12 px-2">
            <h4 className="text-3xl font-bold mb-3">ARROUND THE WEB</h4>
            <div className="icons">
              <Link>
                <i className="fa-brands fa-facebook mx-1 icon"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-twitter mx-1 icon"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
              </Link>
              <Link>
                <i className="fa-solid fa-globe mx-1 icon"></i>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-4/12 px-2">
            <h4 className="text-3xl font-bold mb-3">ABOUT FRELANCER</h4>
            <p className="mb-3">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
        <footer className="text-center text-white p-5 bg-[#1A252F]">
          Copyright © Your Website 2021
        </footer>
      </div>
    </>
  );
}
