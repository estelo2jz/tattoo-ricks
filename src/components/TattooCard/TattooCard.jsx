import React from "react";
import { motion } from "framer-motion";
import "./TattooCard.scss";

const TattooCard = ({ tattoo, delay = 0 }) => {
  return (
    <motion.div
      className="tattoo-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div
        className="tattoo-card__image"
        style={{ backgroundImage: `url(${tattoo.image})` }}
      />
      <div className="tattoo-card__info">
        <h3>{tattoo.title}</h3>
      </div>
    </motion.div>
  );
};

export default TattooCard;
