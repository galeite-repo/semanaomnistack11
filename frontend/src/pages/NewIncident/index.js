import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'
import logImg from '../../assets/logo.svg'
import api from '../../services/api'


export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();
  const ongId = localStorage.getItem('ongId');
  async function handleNewIncient(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('incidents', data, {
        headers: { Authorization: ongId }
      })
      history.push('/profile');
    } catch (error) {
      alert('Erro ao cadastrar caso, tente novamente.')
    }

  }
  if (!ongId) {
    history.push('/');
  }


  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logImg} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para o home
        </Link>
        </section>
        <form onSubmit={handleNewIncient}>
          <input
            value={title} onChange={e => setTitle(e.target.value)}
            placeholder="Título do caso" />
          <textarea
            value={description} onChange={e => setDescription(e.target.value)}
            placeholder="Descrição" />
          <input
            value={value} onChange={e => setValue(e.target.value)}
            placeholder="Valor em reais" />
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}