import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Ricks Nayupac Studio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
