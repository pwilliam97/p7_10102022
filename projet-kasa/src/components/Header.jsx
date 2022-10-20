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
            <img src={Logo} alt={Logo} className='logo'/>
            <nav className='nav_header'>
                <ul className='nav_header_liste'>
                    <li><Link to="/">ACCEUIL</Link></li>
                    <li><Link to="/apropos">A PROPOS</Link></li>
                </ul>   
            </nav>
        </header>
    )
}

export default Header