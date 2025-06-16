import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.scss";

const testimonials = [
  {
    name: "Alex M.",
    text: "Ricks is the only artist I trust with my skin. His work is absolutely stunning.",
  },
  {
    name: "Jamie R.",
    text: "I’ve gotten 3 tattoos here and every single one is a masterpiece.",
  },
  {
    name: "Sasha B.",
    text: "Incredible detail and precision. The booking process was smooth too!",
  },
  {
    name: "Derrick H.",
    text: "Top-tier talent. Ricks listens to your ideas and makes them better.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Client Testimonials</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">
              <p>"{item.text}"</p>
              <h4>- {item.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
