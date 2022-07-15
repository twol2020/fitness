import React, { useState, useRef } from "react";

import { useInView, motion } from "framer-motion";
import "./Amenities.css";
function AmenityItem(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className="amenity-front"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) .2s",
      }}
    >
      <div className="amenity-heading">
        <h3>{props.name}</h3>
        {props.icon}
        <p>{props.text}</p>
      </div>
    </motion.div>
  );
}

export default AmenityItem;
