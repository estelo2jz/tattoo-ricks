import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/" onClick={closeMenu}>Ricks Nayupac</Link>
      </div>

      <nav className={`header__nav ${open ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/booking" onClick={closeMenu}>Booking</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
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
