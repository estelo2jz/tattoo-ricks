import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../../components/Hero/Hero";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Ricks Nayupac Tattoos</title>
        <meta name="description" content="Welcome to Ricks Nayupac Tattoo Studio — custom tattoos crafted with boldness and soul." />
      </Helmet>
      <Hero />
      <Testimonials />
    </>
  );
};

export default Home;
