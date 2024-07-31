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
export default function Home() {
  return (
    <>
      <div className="mt-24 py-10 bg-[#1abc9c] text-white">
        <div className="text-center flex justify-center items-center flex-col">
          <img src="./src/assets/avataaars.svg" alt="" className="w-1/6" />
          <div className="text-center pt-4">
            <h2 className="text-uppercase mb-3 text-4xl capitalize font-bold">
              START FRAMEWORK
            </h2>
            <div className="flex  justify-center items-center mb-3">
              <div className="line me-3 bg-white"></div>
              <i className="fa-solid fa-star"></i>
              <div className="line ms-3 bg-white"></div>
            </div>
          </div>
          <div>Graphic Artist - Web Designer - Illustrator</div>
        </div>
      </div>
    </>
  );
}
