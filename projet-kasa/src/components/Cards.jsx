// Importation de REACT
import React from 'react'
import {Link} from 'react-router-dom';

// Importation du CSS
import '../styles/Cards/Cards.css'

function Cards(props){

    const {item} = props

    return ( 
        <Link to={`/fichelogement/${item.id}`} className='home_Cards'>
            <img src={item.cover} alt="photo_logement" className='home_Cards_Cover'/>
            <h1>{item.title}</h1>
        </Link>  
    )
}

export default Cards
