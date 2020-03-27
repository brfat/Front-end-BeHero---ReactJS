import React from 'react';
//import './App.css';

function Footer(props) {
    return (
        <footer>
            <h3>{props.children}</h3>
        </footer>
    );
}

export default Footer;          