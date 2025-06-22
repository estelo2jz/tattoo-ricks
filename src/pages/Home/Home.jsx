import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../../components/Hero/Hero";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <Helmet>
          <title>Ricks Nayupac | Tattoo Artist in Lake County, Illinois</title>
          <meta name="description" content="Book custom tattoos with Ricks Nayupac — expert in realism, blackwork, and more. Serving California's boldest ink lovers." />
          <meta name="keywords" content="tattoo artist, Ricks Nayupac, custom tattoos, realism, blackwork, California tattoos" />
          <meta name="author" content="Ricks Nayupac" />

          {/* OpenGraph / Social Preview */}
          <meta property="og:title" content="Ricks Nayupac Tattoo Studio" />
          <meta property="og:description" content="Bold, custom tattoos by Ricks Nayupac. Book now." />
          <meta property="og:image" content="https://ricksnayupac.com/RN.jpeg" />
          <meta property="og:url" content="https://ricksnayupac.com" />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
      </Helmet>
      <Hero />
      <Testimonials />
    </>
  );
};

export default Home;
