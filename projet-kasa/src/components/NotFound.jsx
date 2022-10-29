// Importation de REACT
import React from 'react';
import {Link} from 'react-router-dom';

// Importation du CSS
import '../styles/NotFound/NotFound.css'

function NotFound(){
    return (
    <div className='error_Status'>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <nav><Link to="/">Retourner sur la page d'accueil</Link></nav>
    </div>
    )
}

export default NotFound