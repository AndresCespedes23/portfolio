/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import AllProjects from "../Components/AllProjects";
import Contact from "../Components/Contact";
import ScrollTop from "./ScrollTop";

function Pages() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<AllProjects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
