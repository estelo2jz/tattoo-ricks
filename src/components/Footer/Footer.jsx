import React from "react";
import "./Footer.scss";
import EMALogo from "../../assets/EMAA.png"

const Footer = () => {
  return (
    <footer className="footer">
      <a target="new_blank" href="https://estelo.net/">
        &copy; {new Date().getFullYear()} 
        <img src={EMALogo} alt="EMA LOGO" />
        . All rights reserved.
      </a>
    </footer>
  );
};

export default Footer;
 