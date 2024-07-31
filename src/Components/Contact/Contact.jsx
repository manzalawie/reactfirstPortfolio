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
export default function Contact() {
  useEffect(() => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
      input.addEventListener("blur", handleBlur);
      input.addEventListener("input", handleInput);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("blur", handleBlur);
        input.removeEventListener("input", handleInput);
      });
    };
  }, []);

  const handleBlur = (e) => {
    const label = e.target.previousElementSibling;
    if (!e.target.value) {
      label.style.top = "0";
      label.style.opacity = "0";
    }
  };

  const handleInput = (e) => {
    const label = e.target.previousElementSibling;
    label.style.top = "-30px";
    label.style.opacity = "1";
  };
  return (
    <>
      <div className="contactSection bg-white py-20 mt-24 text-center">
        <div>
          <h2 className="text-4xl font-bold text-[#2C3E50]">CONTACT SECTION</h2>
        </div>
        <div className="flex  justify-center items-center mb-3 mt-4">
          <div className="line me-3 bg-[#2C3E50]"></div>
          <i className="fa-solid fa-star text-[#2C3E50]"></i>
          <div className="line ms-3 bg-[#2C3E50]"></div>
        </div>
        <div className="form text-left">
          <form className="w-1/2 p-3 mx-auto mt-5">
            <div className="form-group">
              <label htmlFor="userName" className="hidden-label">
                userName :
              </label>
              <input
                id="userName"
                type="text"
                placeholder="userName"
                name="userName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="userAge" className="hidden-label">
                userAge :
              </label>
              <input
                id="userAge"
                type="text"
                placeholder="userAge"
                name="userAge"
              />
            </div>
            <div className="form-group">
              <label htmlFor="userEmail" className="hidden-label">
                userEmail :
              </label>
              <input
                id="userEmail"
                type="text"
                placeholder="userEmail"
                name="userEmail"
              />
            </div>
            <div className="form-group">
              <label htmlFor="userPassword" className="hidden-label">
                userPassword :
              </label>
              <input
                id="userPassword"
                type="text"
                placeholder="userPassword"
                name="userPassword"
              />
            </div>
            <button className="text-whit text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-[#1ABC9C] ">
              send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
