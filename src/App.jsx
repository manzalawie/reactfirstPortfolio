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
import Notfound from "./Components/Notfound/Notfound";

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
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "*",
        element: <Notfound />,
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
