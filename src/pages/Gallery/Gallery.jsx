import React from "react";
import TattooCard from "../../components/TattooCard/TattooCard";
import Tattoo01 from '../../assets/tat01.jpeg';
import Tattoo02 from '../../assets/tat02.jpeg';
import Tattoo03 from '../../assets/tat03.jpeg';
import Tattoo04 from '../../assets/tat04.jpeg';
import Tattoo06 from '../../assets/tat06.jpeg';
import Tattoo07 from '../../assets/tat07.jpeg';
import Tattoo08 from '../../assets/tat08.jpeg';
import Tattoo09 from '../../assets/tat09.jpeg';
import Tattoo10 from '../../assets/tat00.jpeg';
import "./Gallery.scss";

const tattoos = [
  { id: 1, title: "", image: Tattoo01 },
  { id: 2, title: "", image: Tattoo02 },
  { id: 3, title: "", image: Tattoo03 },
  { id: 4, title: "", image: Tattoo04 },
  { id: 6, title: "", image: Tattoo06 },
  { id: 7, title: "", image: Tattoo07 },
  { id: 8, title: "", image: Tattoo08 },
  { id: 9, title: "", image: Tattoo09 },
  { id: 10, title: "", image: Tattoo10 },
];

const Gallery = () => {
  return (
    <section className="gallery">
      <h2>Featured Tattoos</h2>
      <div className="gallery__grid">
        {tattoos.map((tattoo, index) => (
          <TattooCard key={tattoo.id} tattoo={tattoo} delay={index * 0.2} alt={`Tattoo design: ${tattoos.title}`} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
