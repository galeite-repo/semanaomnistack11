import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'
import heroesImg from '../../assets/heroes.png'
import logImg from '../../assets/logo.svg'


export default function Logon() {

  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id })

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (error) {
      alert('Falha no login, tente novamente.')
    }
  }
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logImg} alt="Be The Hero" />

        <form >
          <h1>Faça seu login</h1>
          <input placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit" onClick={handleLogin}>Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
        </Link>
        </form>
      </section>


      <img src={heroesImg} alt="Heroes" />
    </div>
  )
}