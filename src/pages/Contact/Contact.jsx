import React from "react";
import "./Contact.scss";
import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Get In Touch</h2>
      <p className="contact__text">
        Whether you're ready to get inked or just have questions, I’d love to hear from you.
      </p>

      <div className="contact__info">
        <div className="contact__socials">
          {/* <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /> Instagram</a> */}
          <a href="https://www.facebook.com/p/Ricks-Nayupac-Tattoo-100083419930962/" target="_blank" rel="noreferrer"><FaFacebookF /> Facebook</a>
          <a href="mailto:nayupacricks@gmail.com"><FaEnvelope /> nayupacricks@gmail.com</a>
        </div>
        <div className="contact__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086284380382!2d-122.41941518468207!3d37.77492927975856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c55a917e3%3A0xd5fcb1c97f3f22c0!2sSan+Francisco!5e0!3m2!1sen!2sus!4v1610000000000"
            allowFullScreen=""
            loading="lazy"
            title="Studio Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
