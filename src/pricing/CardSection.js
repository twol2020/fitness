import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";
import "./CardSection.css";
import { RiSuitcaseFill } from "react-icons/ri";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { CgGym } from "react-icons/cg";
import { GiGymBag } from "react-icons/gi";

function CardSection() {
  //   const [cardIsVisible, setCardIsVisible] = useState();
  //   const myRef = useRef();
  //   useEffect(() => {
  //     const observer = new IntersectionObserver((entries) => {
  //       const entry = entries[0];
  //       setCardIsVisible(entry.isIntersecting);
  //       console.log("entry", entry);
  //     });
  //     observer.observe(myRef.current);
  //   }, []);
  return (
    <div className={`card-section`}>
      <Card
        icon={<RiSuitcaseFill />}
        name="Traveler"
        price="$19.99 / Day"
        online={<AiOutlineClose />}
        discount={<AiOutlineClose />}
        training={<AiOutlineClose />}
      />

      <Card
        name="Gym Rat"
        price="$399.99 / Year"
        icon={<CgGym />}
        online={<AiOutlineCheck />}
        discount={<AiOutlineCheck />}
        training={<AiOutlineCheck />}
        className={`value`}
      />

      <Card
        name="Regular"
        price="$44.99 / Month"
        icon={<GiGymBag />}
        online={<AiOutlineCheck />}
        discount={<AiOutlineCheck />}
        training={<AiOutlineClose />}
      />
    </div>
  );
}

export default CardSection;
