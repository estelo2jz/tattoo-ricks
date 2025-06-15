import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import artistImg from "../../assets/RN.jpeg"; // Add your artist image here

const About = () => {
  return (
    <motion.section className="about">
      <div className="about__container">
        <div className="about__image">
          <img src={artistImg} alt="Tattoo Artist" />
        </div>
        <div className="about__content">
          <h2>Meet Your Artist</h2>
          <p>
            With over a decade of tattooing experience, I bring stories to life through ink.
            I specialize in realism, blackwork, and custom illustrative designs.
            Every piece is personal, every detail deliberate.
          </p>
          <p>
            Whether it’s your first or your fifth, I make sure each tattoo
            reflects your personality, values, and style.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
