import React from "react";
import "./About.css";
import AboutImg from "./AboutImg";
import AboutText from "./AboutText";
function About() {
  return (
    <section className="about">
      <img
        src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?cs=srgb&dl=pexels-leon-ardho-1552242.jpg&fm=jpg"
        alt=""
        className="about-img"
      />
      ;
      <AboutText />
    </section>
  );
}

export default About;
