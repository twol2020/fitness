import React from "react";
import Navbar from "../navbar/components/Navbar";
import Header from "./Header";
import "./Hero.css";
import JoinCTA from "./JoinCTA";
function Hero(props) {
  return (
    <React.Fragment>
      <header className="hero-main">
        <Navbar />

        <Header />
      </header>
      {/* <JoinCTA /> */}
    </React.Fragment>
  );
}

export default Hero;
