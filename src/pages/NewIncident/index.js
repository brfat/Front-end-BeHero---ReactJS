import React from 'react';
import { Link }  from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';

import logoImg from '../../images/logo.svg';

export default function NewIncident() {
    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="be the hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041" />Voltar para a home
                   </Link>
                </section>

                <form>
                     <input placeholder="Titulo do caso" />
                     <textarea type="text" placeholder="Descrição" />       
                     <input placeholder="Valor em reais" />
                     <button className="button" type="submit">
                     Cadastrar
                     </button>
                </form>
            </div>
        </div>
    );
}