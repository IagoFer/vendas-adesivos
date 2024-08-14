import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard'; // Certifique-se de que o ProductCard está corretamente importado
import "../styles/ProductsSection.css";

function ProductsSection() {
  const [products, setProducts] = useState([]); // Estado inicial como array vazio
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
      } catch (err) {
        setError('Erro ao carregar produtos');
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="products-section" id="products">
      <div className="products-title-container">
        <h2 className="products-title">Nossos Produtos</h2>
        <p className="products-description">
          Explore nossa gama de produtos de alta qualidade para todos os seus desejos automotivos.
        </p>
      </div>
      <div className="products-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </div>
    </section>
  );
}

export default ProductsSection;
