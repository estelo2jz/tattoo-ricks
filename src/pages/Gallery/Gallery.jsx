import React from "react";
import TattooCard from "../../components/TattooCard/TattooCard";
import Tattoo01 from '../../assets/tattoo01.jpg';
import Tattoo02 from '../../assets/tattoo02.jpg';
import Tattoo03 from '../../assets/tattoo03.jpg';
import Tattoo04 from '../../assets/tattoo04.jpg';
import Tattoo05 from '../../assets/tattoo05.jpg';
import Tattoo06 from '../../assets/tattoo06.jpg';
import "./Gallery.scss";

const tattoos = [
  { id: 1, title: "Dragon Sleeve", image: Tattoo01 },
  { id: 2, title: "Geometric Mandala", image: Tattoo02 },
  { id: 3, title: "Portrait Realism", image: Tattoo03 },
  { id: 4, title: "Traditional Skull", image: Tattoo04 },
  { id: 5, title: "Blackwork Rose", image: Tattoo05 },
  { id: 6, title: "Neo-Japanese Koi", image: Tattoo06 },
];

const Gallery = () => {
  return (
    <section className="gallery">
      <h2>Featured Tattoos</h2>
      <div className="gallery__grid">
        {tattoos.map((tattoo, index) => (
          <TattooCard key={tattoo.id} tattoo={tattoo} delay={index * 0.2} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
