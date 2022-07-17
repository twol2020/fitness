import React from "react";

import { ReactDOM } from "react";
import About from "./about/About";
import Amenities from "./amenities/Amenities";
import "./App.css";
import Hero from "./hero/hero/Hero";
import { Link, Route, Routes } from "react-router-dom";

import CardSection from "./pricing/CardSection";
import Placeholder from "./pricing/Placeholder";
import Testimonials from "./testimonials/Testimonials";

function Gym() {
  return (
    <React.Fragment>
      <Hero />
      {/* <About /> */}
      <CardSection />
      <Placeholder />
      <Testimonials />
      <Amenities />
    </React.Fragment>
  );
}

export default Gym;
