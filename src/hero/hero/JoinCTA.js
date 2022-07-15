import React from "react";
import Button from "../../shared/UIElements/Button";
import "./JoinCTA.css";
function JoinCTA() {
  return (
    <aside className="cta">
      <p>See what we're all about with a 7-day trial</p>
      <Button text="Get free trial" className="btn-join" />
    </aside>
  );
}

export default JoinCTA;
