import React from "react";
import "./Hero.scss";
import heroBg from "../../assets/tattoo.jpg"; // Make sure to add an image in this path

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero__overlay">
        <div className="hero__content">
          <h1>Ink That Tells Your Story</h1>
          <p>Custom tattoos by an artist who lives to bring your vision to life.</p>
          <button>Book a Session</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
