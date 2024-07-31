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
export default function About() {
  return (
    <>
      <div className="sectionAbout bg-[#1abc9c] py-20 mt-24">
        <div className="container p-16 m-auto text-center text-white">
          <h3 className="text-5xl font-bold mb-5">ABOUT COMPONENT</h3>
          <div className="flex  justify-center items-center mb-3">
            <div className="line me-3 bg-white"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3 bg-white"></div>
          </div>
          <div className="flex justify-center items- text-left">
            <div className="w-full md:w-1/12 px-2"></div>
            <div className="w-full md:w-5/12 px-2">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="w-full md:w-5/12 px-2">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="w-full md:w-1/12 px-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}
