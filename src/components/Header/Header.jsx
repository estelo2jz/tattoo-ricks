import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header__logo">
        <NavLink to="/" onClick={closeMenu}>Ricks Nayupac</NavLink>
      </div>

      <nav className={`header__nav ${open ? "open" : ""}`}>
        <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/gallery" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Gallery</NavLink>
        <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
        <NavLink to="/booking" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Booking</NavLink>
        <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
      </nav>

      <div
        className={`header__toggle ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </div>
    </header>
  );
};

export default Header;
