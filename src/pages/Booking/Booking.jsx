import React, { useState } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Booking.scss";

const Booking = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [selectedDate, setSelectedDate] = useState(null);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("https://formspree.io/f/mblyyzlj", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: form.email,
        message: `Name: ${form.name}\nDate: ${selectedDate?.toLocaleDateString()}\n\n${form.message}`,
      }),
    });

    const result = await res.json();

    if (res.ok) {
      setStatus("Thanks! Your booking request was sent.");
      setForm({ name: "", email: "", message: "" });
      setSelectedDate(null);
    } else {
      setStatus(result.error || "Something went wrong. Please try again later.");
    }
  };

  return (
    <motion.section
      className="booking"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Book a Session</h2>

      <motion.form
        className="booking__form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        />

        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        />

        {/* <motion.div
          className="booking__datepicker-wrapper"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Preferred Date (Mon & Tue Only)"
            className="booking__date-picker"
            minDate={new Date()}
            required
            filterDate={(date) => {
              const day = date.getDay();
              return day === 1 || day === 2; // 1 = Monday, 2 = Tuesday
            }}
          />
        </motion.div> */}

        <motion.textarea
          name="message"
          placeholder="What type of tattoo are you looking for?"
          value={form.message}
          onChange={handleChange}
          required
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Send Booking Request
        </motion.button>

        {status && <p className="booking__status">{status}</p>}
      </motion.form>
    </motion.section>
  );
};

export default Booking;
