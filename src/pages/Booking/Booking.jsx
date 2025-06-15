import React, { useState } from "react";
import "./Booking.scss";

const Booking = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("https://formspree.io/f/mayvlvwg", { // Replace with your real endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    });

    if (res.ok) {
      setStatus("Thanks! Your booking request was sent.");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Something went wrong. Please try again later.");
    }
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
        {status && <p className="booking__status">{status}</p>}
      </form>
    </section>
  );
};

export default Booking;
