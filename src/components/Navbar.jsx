import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <motion.div
          className="navbar-logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home" className="logo-link">FuturisticShop</a>
        </motion.div>
        
        <div className={`navbar-menu ${isMobile ? "active" : ""}`}>
          <a href="#home" className="navbar-link">Home</a>
          <a href="#products" className="navbar-link">Produtos</a>
          <a href="#about" className="navbar-link">Sobre</a>
          <a href="#contact" className="navbar-link">Contato</a>
          <a href="#cart" className="navbar-cart-icon">
            <FaShoppingCart />
          </a>
        </div>

        <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
