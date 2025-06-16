import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import About from "./pages/About/About";
import Booking from "./pages/Booking/Booking";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <Helmet>
        <title>Ricks Nayupac Tattoo Studio</title>
        <meta name="description" content="Custom tattoos with bold stories. Book your session with Ricks Nayupac." />
        <meta name="keywords" content="tattoo, artist, ink, custom tattoos, Ricks Nayupac, gallery" />
        <meta name="author" content="Ricks Nayupac" />
      </Helmet>

      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
      <ScrollToTop />
    </Router>
  );
};

export default App;
