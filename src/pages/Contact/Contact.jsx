import React from "react";
import { motion } from "framer-motion";
import "./Contact.scss";
import { FaFacebookF, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Get In Touch</h2>
      <p className="contact__text">
        Whether you're ready to get inked or just have questions, I’d love to hear from you.
      </p>

      <motion.div
        className="contact__info"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="contact__socials">
          <a href="https://www.facebook.com/p/Ricks-Nayupac-Tattoo-100083419930962/" target="_blank" rel="noreferrer">
            <FaFacebookF /> Facebook
          </a>
          <a href="mailto:nayupacricks@gmail.com">
            <FaEnvelope /> nayupacricks@gmail.com
          </a>
        </div>

        {/* Map can be animated later if re-enabled */}
        {/* <div className="contact__map">
          <iframe ... />
        </div> */}
      </motion.div>
    </motion.section>
  );
};

export default Contact;
