import React from 'react';
//import './App.css';

function Header(props) {
    return (
        <header>
            <h3>{props.children}</h3>
        </header>
    );
}

export default Header;                                                           