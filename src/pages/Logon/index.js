import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './style.css';

import heroesImg from '../../images/heroes.png';
import logo from '../../images/logo.svg';


export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img className="logo" src={logo}></img>

                <form>
                    <h1>Faça seu Login</h1>
                    <input placeholder="Digite a sua ID" />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />Não tenho cadastro
                   </Link>
                </form>

            </section>

            <img src={heroesImg} alt="heroes"></img>
        </div>
    );
}