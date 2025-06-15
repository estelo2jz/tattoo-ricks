import React, { useState } from "react";
import "./Booking.scss";

const Booking = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted! I’ll be in touch soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="booking">
      <h2>Book a Session</h2>
      <form className="booking__form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="What type of tattoo are you looking for?"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Booking Request</button>
      </form>
    </section>
  );
};

export default Booking;
