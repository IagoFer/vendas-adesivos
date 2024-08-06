import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 FuturisticShop. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
