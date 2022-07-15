import React from "react";
import Button from "../../shared/UIElements/Button";
import "./Header.css";
function Header() {
  return (
    <section className="hero">
      <h1 className="hero-header">Get fit and healthy.</h1>
      <p className="hero-text">Join now for your free 7-day trial.</p>
      <Button text="Sign Up" />
    </section>
  );
}

export default Header;
