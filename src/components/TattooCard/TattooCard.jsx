import React from "react";
import { motion } from "framer-motion";
import "./TattooCard.scss";

const TattooCard = ({ tattoo }) => {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div
        className="tattoo-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div
          className="tattoo-card__image"
          style={{ backgroundImage: `url(${tattoo.image})` }}
        />
        <div className="tattoo-card__info">
          <h3>{tattoo.title}</h3>
        </div>
      </div>
    </motion.section>
  );
};

export default TattooCard;
