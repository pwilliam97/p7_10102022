// Importation de REACT
import React from 'react'

//Importation des assets
import Logo from '../assets/logo.png'

// Importation du CSS
import '../styles/Footer/Footer.css'

function Footer(){
    return (
        <footer>
            <img src={Logo} alt={Logo} className='logo'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer