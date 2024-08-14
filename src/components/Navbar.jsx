import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Navbar.css";
import axios from 'axios';
import EditAccountModal from './EditAccountModal';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth(); // Use o contexto de autenticação
  const { cartItems, getTotalItems } = useCart(); // Obtém o número total de itens no carrinho

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleDeleteAccount = async () => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete('http://localhost:5000/auth/delete', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      handleLogout();
      alert('Conta deletada com sucesso.');
    } catch (err) {
      console.error('Erro ao deletar a conta:', err);
      alert('Erro ao deletar a conta.');
    }
  };

  const goToCart = () => {
    navigate('/cart'); // Redireciona para a página do carrinho
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <motion.div
          className="navbar-logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="logo-link">FuturisticShop</Link>
        </motion.div>
        
        <div className={`navbar-menu ${isMobile ? "active" : ""}`}>
          <Link to="/" className="navbar-link">Home</Link>
          <a href="#about" className="navbar-link">Sobre</a>
          <a href="#contact" className="navbar-link">Contato</a>

          {!isAuthenticated ? (
            <div className="auth-links">
              <Link to="/login" className="navbar-link">Login</Link>
              <Link to="/register" className="navbar-link">Registrar</Link>
            </div>
          ) : (
            <div className="navbar-user-dropdown">
              <div 
                className="navbar-user-icon" 
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <FaUserCircle size={24} />
              </div>
              {showDropdown && (
                <div className="navbar-dropdown-menu">
                  <div 
                    className="navbar-dropdown-item" 
                    onClick={() => setShowEditModal(true)}
                  >
                    Editar Conta
                  </div>
                  <div 
                    className="navbar-dropdown-item" 
                    onClick={handleDeleteAccount}
                  >
                    Deletar Conta
                  </div>
                  <div 
                    className="navbar-dropdown-item" 
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="navbar-cart-icon" onClick={goToCart}>
            <FaShoppingCart />
            {getTotalItems() > 0 && (
              <span className="cart-item-count">{getTotalItems()}</span>
            )}
          </div>
        </div>

        <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      {showEditModal && (
        <EditAccountModal 
          onClose={() => setShowEditModal(false)} 
          onDelete={handleDeleteAccount} 
        />
      )}
    </nav>
  );
};

export default Navbar;
