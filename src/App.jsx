import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./styles/App.css";

const products = [
  {
    name: "Adesivo Futurista",
    description: "Um adesivo incrível para seu carro.",
    price: 19.99,
    image: "https://www.phif.com.br/moleskines/imagens/adesivo-personalizado-para-carros-melhor-preco.jpg"
  },
  {
    name: "Capa de Volante",
    description: "Uma capa de volante com design moderno.",
    price: 29.99,
    image: "https://m.media-amazon.com/images/I/71tm3LzZiZL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    name: "Luz de Neon",
    description: "Luzes de neon para dar um toque especial ao seu carro.",
    price: 49.99,
    image: "https://http2.mlstatic.com/D_NQ_NP_984044-MLB69415832724_052023-O.webp"
  },
  {
    name: "Porta Copos",
    description: "Porta copos com design ergonômico.",
    price: 9.99,
    image: "https://www.importsnautica.com.br/lojas/image/cache/catalog/LiAnun/81w-cLBpenL._SL1500_-800x800.jpg"
  }
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <main className="main-content">
        <ProductsSection products={products} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
