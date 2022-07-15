import React from "react";
import "./Card.css";
import { AiOutlineCheck } from "react-icons/ai";
import Button from "../shared/UIElements/Button";
import { useInView } from "react-intersection-observer";
function Card(props) {
  const { ref: myRef, inView: setCardIsVisible } = useInView();
  return (
    <div
      className={`card ${props.className} ${setCardIsVisible ? "appear" : ""}`}
      ref={myRef}
    >
      <div className="card-heading">
        <h3 className="card-header">{props.name}</h3>
        <span>{props.icon}</span>
      </div>

      <ul>
        <li>{props.price}</li>
        <li>
          <span>
            <AiOutlineCheck /> 24 Hour Access
          </span>
        </li>
        <li>
          <span>{props.online} Access to online portal</span>
        </li>
        <li>
          <span>{props.discount} Discounts to Cafe </span>
        </li>
        <li>
          <span>
            {props.training} Access to 5 free personal training sessions
          </span>
        </li>
      </ul>

      <Button text="Join" className="pricing-btn"></Button>
    </div>
  );
}

export default Card;
