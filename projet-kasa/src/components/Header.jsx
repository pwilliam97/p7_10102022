// Importation de REACT
import React from 'react';
import {Link} from 'react-router-dom';

//Importation des assets
import Logo from '../assets/logo.png'

// Importation du CSS
import '../styles/Header/Header.css'

function Header(){
    return (
        <header>
            <Link to="/"><img src={Logo} alt={Logo} className='logo'/></Link>
            <nav className='nav_header'>
                <ul className='nav_header_liste'>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/apropos">A Propos</Link></li>
                </ul>   
            </nav>
        </header>
    )
}

export default Header