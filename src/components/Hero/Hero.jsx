import React from "react";
import { Link } from "react-router-dom"; // ✅ Correct import here
import "./Hero.scss";
import heroBg from "../../assets/RN.jpeg";

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
          
          {/* ✅ Wrap the button in Link */}
          <Link to="/booking">
            <button>Book a Session</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
