import React, { useState } from "react";
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

    const res = await fetch("https://formspree.io/f/YOUR_REAL_ID", {
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
          placeholder="Your Email"wa
          value={form.email}
          onChange={handleChange}
          required
        />

        {/* <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Preferred Date"
          className="booking__date-picker"
          minDate={new Date()}
          required
        /> */}

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
