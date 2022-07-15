import React, { useRef } from "react";
import AmenityItem from "./AmenityItem";
import { MdOutlineLocalCafe } from "react-icons/md";
import { BiSpa } from "react-icons/bi";
import { GiSteam } from "react-icons/gi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { useInView } from "framer-motion";
import "./Amenities.css";
function Amenities(props) {
  const amens = [
    {
      name: "Cafe",
      text: "Grab a smoothie after your workout or shop for some supplements to step up your game.",
      icon: <MdOutlineLocalCafe />,
    },
    {
      name: "Salon",
      text: "Relax after your workout with a fresh haircut and nails!",
      icon: <BiSpa />,
    },
    {
      name: "Sauna",
      text: "Enjoying a nice trip to the sauna to soothe your aching muscles.",
      icon: <GiSteam />,
    },
    {
      name: "Fitness Center",
      text: "Visit our brand new, world class fitness center, featuring state of the art yoga studios, cardio machines and weights.",
      icon: <GiWeightLiftingUp />,
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  return (
    <div className="amenities">
      <h3>Amenities</h3>
      <ul className="amenities-list">
        {amens.map((item) => (
          <span>
            <li className={`amenity ${props.className}`}>
              <AmenityItem
                name={item.name}
                text={item.text}
                icon={item.icon}
                image={item.image}
              />
            </li>
          </span>
        ))}
      </ul>
    </div>
  );
}

export default Amenities;
