import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import artistImg from "../../assets/RN.jpeg";

const About = () => {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="about__container">
        <motion.div
          className="about__image"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <img src={artistImg} alt="Tattoo Artist" />
        </motion.div>

        <motion.div
          className="about__content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
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
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
