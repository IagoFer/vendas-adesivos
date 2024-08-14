import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import Footer from "./components/Footer";
import Register from './components/Register';
import Login from './components/Login';
import Cart from './components/Cart';
import Payment from './components/Payment';
import axios from "axios";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext'; // Adicione a importação do AuthProvider

const ConditionalHeroSection = () => {
  const location = useLocation();
  return location.pathname === '/' ? <HeroSection /> : null;
};

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Router>
      <AuthProvider> {/* Envolva o CartProvider e outros componentes com o AuthProvider */}
        <CartProvider>
          <div className="App">
            <Navbar />
            <ConditionalHeroSection />
            <main className="main-content">
              <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<ProductsSection products={products} />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment" element={<Payment />} />
                {/* Adicione outras rotas conforme necessário */}
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
