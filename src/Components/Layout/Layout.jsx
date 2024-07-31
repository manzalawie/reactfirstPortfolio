/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import $ from "jquery";
import { Outlet } from "react-router-dom";
import Nav from "./../Nav/Nav";
import Footer from "./../Footer/Footer";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
  createBrowserRouter,
} from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
