import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">Ricks Nayupac</Link>
        
      </div>
      <nav className={`header__nav ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/booking" onClick={() => setOpen(false)}>Booking</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </nav>
      <div
        className={`header__toggle ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </div>
    </header>
  );
};

export default Header;
