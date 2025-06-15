import React from "react";
import "./About.scss";
import artistImg from "../../assets/RK.png"; // Add your artist image here

const About = () => {
  return (
    <section className="about">
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
    </section>
  );
};

export default About;
