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
export default function Portfolio() {
  return (
    <>
      <div className="portfolio bg-white py-20 mt-24 text-center text-[#2C3E50]">
        <div>
          <h2 className="text-4xl font-bold">PORTFOLIO COMPONENT</h2>
        </div>
        <div className="flex  justify-center items-center mb-3 mt-4">
          <div className="line me-3 bg-[#2C3E50]"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line ms-3 bg-[#2C3E50]"></div>
        </div>
        <div className="mt-10 gap-10 p-14 flex flex-wrap justify-center text-center mx-auto">
          <div className="relative w-full md:w-3/12 group rounded-xl overflow-hidden">
            <Link>
              <div className="absolute inset-0 flex items-center justify-center bg-[#1abc9ce6] opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                <i className="fas fa-plus text-white font-bold text-7xl"></i>
              </div>
            </Link>
            <img src="./src/assets/poert1.png" className="w-full" alt="port1" />
          </div>
          <div className="relative w-full md:w-3/12 group rounded-xl overflow-hidden">
            <Link>
              <div className="absolute inset-0 flex items-center justify-center bg-[#1abc9ce6] opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                <i className="fas fa-plus text-white font-bold text-7xl"></i>
              </div>
            </Link>
            <img src="./src/assets/port2.png" className="w-full" alt="port1" />
          </div>
          <div className="relative w-full md:w-3/12 group rounded-xl overflow-hidden">
            <Link>
              <div className="absolute inset-0 flex items-center justify-center bg-[#1abc9ce6] opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                <i className="fas fa-plus text-white font-bold text-7xl"></i>
              </div>
            </Link>
            <img src="./src/assets/port3.png" className="w-full" alt="port1" />
          </div>
          <div className="relative w-full md:w-3/12 group rounded-xl overflow-hidden">
            <Link>
              {" "}
              <div className="absolute inset-0 flex items-center justify-center bg-[#1abc9ce6] opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                <i className="fas fa-plus text-white font-bold text-7xl"></i>
              </div>
            </Link>
            <img src="./src/assets/poert1.png" className="w-full" alt="port1" />
          </div>
          <div className="relative w-full md:w-3/12 group rounded-xl overflow-hidden">
            <Link>
              {" "}
              <div className="absolute inset-0 flex items-center justify-center bg-[#1abc9ce6] opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                <i className="fas fa-plus text-white font-bold text-7xl"></i>
              </div>
            </Link>
            <img src="./src/assets/port2.png" className="w-full" alt="port1" />
          </div>
          <div className="relative w-full md:w-3/12 group rounded-xl overflow-hidden">
            <Link>
              <div className="absolute inset-0 flex items-center justify-center bg-[#1abc9ce6] opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                <i className="fas fa-plus text-white font-bold text-7xl"></i>
              </div>
            </Link>
            <img src="./src/assets/port3.png" className="w-full" alt="port1" />
          </div>
        </div>
      </div>
    </>
  );
}
