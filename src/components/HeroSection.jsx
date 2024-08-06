import React from "react";
import { motion } from "framer-motion";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">Explore o Futuro dos Acessórios para Carro</h1>
        <p className="hero-subtitle">
          Descubra produtos incríveis para personalizar e melhorar seu veículo.
        </p>
        <a href="#products" className="hero-button">
          Ver Produtos
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
