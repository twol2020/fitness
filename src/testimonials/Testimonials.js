import React, { useState } from "react";
import "./Testimonials.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { LayoutGroup, motion } from "framer-motion";
function Testimonials() {
  const [move, setMove] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="testimonials">
      <FaQuoteLeft className="testimonial-quote" />
      <motion.div
        className="testimonial-container"
        onClick={handleClick}
        layout
        style={{ height: isOpen ? "auto" : 100 }}
        drag
      >
        <motion.div className="testimonial-card" layout="position">
          <img
            src="https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
          />
          <div className="testimonial-text">
            <p className="testimonial-name">Rachel</p>
            <p className="testimonial-job">Teacher</p>
          </div>
        </motion.div>
        {isOpen && (
          <motion.p className="testimonial-content">
            The personal trainers here are so friendly and welcoming! The make
            me actually want to go to the gym!
          </motion.p>
        )}
      </motion.div>
      <motion.div
        className="testimonial-container"
        onClick={handleClick}
        layout
        style={{ height: isOpen ? "auto" : 100 }}
      >
        <motion.div className="testimonial-card" layout="position">
          <img
            src="https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2094&q=80"
            alt=""
          />
          <div className="testimonial-text">
            <p className="testimonial-name">Abdullah</p>
            <p className="testimonial-job">Software Engineer</p>
          </div>
        </motion.div>
        {isOpen && (
          <p className="testimonial-content">
            This gym is always so clean and the atmosphere is very welcoming!
            The staff always greets me by name!
          </p>
        )}
      </motion.div>
      <motion.div
        className="testimonial-container"
        onClick={handleClick}
        layout
        style={{ height: isOpen ? "auto" : 100 }}
      >
        <motion.div className="testimonial-card" layout="position">
          <img
            src="https://images.unsplash.com/photo-1627910002384-990a96e6b699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
            alt=""
          />
          <div className="testimonial-text">
            <p className="testimonial-name">Jessica</p>
            <p className="testimonial-job">Accountant</p>
          </div>
        </motion.div>
        {isOpen && (
          <p className="testimonial-content">
            I love that this gym is open 24 hours! With my busy schedule, I know
            I can go anytime to have a great workout!
          </p>
        )}
      </motion.div>
      <FaQuoteRight className="testimonial-quote-right" />
    </section>
  );
}

export default Testimonials;
