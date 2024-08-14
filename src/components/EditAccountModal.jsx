import React, { useState } from 'react';
import '../styles/EditAccountModal.css';

const EditUserModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Lógica para atualizar as informações do usuário
      await axios.put('http://localhost:5000/auth/update', formData);
      alert('Informações atualizadas com sucesso!');
      onClose();
    } catch (err) {
      alert('Erro ao atualizar as informações');
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <h2>Editar Conta</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Nome de Usuário"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <button type="submit">Salvar Alterações</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;
