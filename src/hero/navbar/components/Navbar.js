import React, { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import { Routes, Route, NavLink } from "react-router-dom";
import Button from "../../../shared/UIElements/Button";
import "./Navbar.css";
function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-list-item">
          <NavLink to="/" className="navbar-link">
            Gym
          </NavLink>
        </li>
        <li>
          <div className="navbar-center">
            <motion.li>
              <NavLink to="/" className="navbar-link">
                Classes
              </NavLink>
            </motion.li>
            <li>
              <NavLink to="/" className="navbar-link">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="navbar-link">
                Contact Us
              </NavLink>
            </li>
          </div>
        </li>
        <li>
          <Button text="Sign Up" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
