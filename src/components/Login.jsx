import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importando o hook para redirecionamento
import { useAuth } from '../context/AuthContext'; // Importe o contexto de autenticação
import '../styles/Login.css'; // Importa o CSS

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook para redirecionamento
  const { login } = useAuth(); // Use o contexto de autenticação

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/login', formData);
      localStorage.setItem('token', response.data.token); // Armazena o token no localStorage
      login(); // Atualiza o estado de autenticação no contexto
      alert('Login bem-sucedido!');
      navigate('/'); // Redireciona para a página home
    } catch (err) {
      setError(err.response.data.message || 'Erro ao fazer login');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Login</h2>
        {error && <p className="login-error">{error}</p>}
        <input
          type="email"
          name="email"
          className="login-input"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          className="login-input"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className="login-button">Entrar</button>
        <div className="login-footer">
          <p>Não tem uma conta? <a href="/register">Cadastre-se</a></p>
        </div>
      </form>
    </div>
  );
}

export default Login;
