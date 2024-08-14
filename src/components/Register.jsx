import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importando o hook para redirecionamento
import '../styles/Register.css'; // Importa o CSS

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook para redirecionamento

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/auth/register', formData);
      alert('Cadastro realizado com sucesso!');
      navigate('/login'); // Redireciona para a página de login
    } catch (err) {
      setError(err.response.data.message || 'Erro ao cadastrar');
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">Cadastro</h2>
        {error && <p className="register-error">{error}</p>}
        <input
          type="text"
          name="username"
          className="register-input"
          placeholder="Nome de Usuário"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          className="register-input"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          className="register-input"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className="register-button">Cadastrar</button>
        <div className="register-footer">
          <p>Já tem uma conta? <a href="/login">Faça Login</a></p>
        </div>
      </form>
    </div>
  );
}

export default Register;
