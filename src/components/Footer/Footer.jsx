import React from "react";
import "./footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
export const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="footer-container">
        <div className="socials-links">
          <img src={Github} alt="logo github" />
          <img src={Instagram} alt="logo instagram" />
          <img src={LinkedIn} alt="logo linkedin" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="logo du site internet" />
        </div>
      </div>
    </footer>
  );
};
