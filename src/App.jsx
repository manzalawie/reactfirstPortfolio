/* eslint-disable no-unused-vars */
import { React } from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";

import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
  createBrowserRouter,
} from "react-router-dom";

let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "", // Default child route
        element: <Home />, // This will render in Outlet when path is '/'
      },
      {
        path: "about", // Path for the About component
        element: <About />, // This will render in Outlet when path is '/about'
      },
      {
        path: "contact", // Path for the Contact component
        element: <Contact />, // This will render in Outlet when path is '/contact'
      },
      {
        path: "portfolio", // Path for the Contact component
        element: <Portfolio />, // This will render in Outlet when path is '/contact'
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  );
}

export default App;
