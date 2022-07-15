import React from "react";
import "./Button.css";
function Button(props) {
  return <button className={`btn ${props.className}`}>{props.text}</button>;
}

export default Button;
