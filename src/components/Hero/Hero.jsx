import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Hero.scss";
import heroBg from "../../assets/RN.jpeg";

const Hero = () => {
  return (
    <motion.section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="hero__overlay">
        <div className="hero__content">
          <h1>Ink Your Vision</h1>
          <p>Custom tattoos by an artist who lives to bring your vision to life.</p>
          <Link to="/booking">
            <button>Book a Session</button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
