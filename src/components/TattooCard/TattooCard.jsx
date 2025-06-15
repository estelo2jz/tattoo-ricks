import React from "react";
import "./TattooCard.scss";

const TattooCard = ({ tattoo }) => {
  return (
    <div className="tattoo-card">
      <div
        className="tattoo-card__image"
        style={{ backgroundImage: `url(${tattoo.image})` }}
      />
      <div className="tattoo-card__info">
        <h3>{tattoo.title}</h3>
      </div>
    </div>
  );
};

export default TattooCard;
