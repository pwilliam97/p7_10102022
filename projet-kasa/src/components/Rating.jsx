// Importation de REACT
import React from 'react'
import { useParams } from 'react-router-dom'

// Importation des assets
import Logement from '../assets/logements.json'

function Rating(){
    const {logementId} = useParams();
    const logement = Logement.find((item) => item.id === logementId)

    console.log(logement.rating)

    return (
        <div>
            <i className="fa fa-star rate"></i>
            <i className="fa fa-star rate"></i>
            <i className="fa fa-star rate"></i>
            <i className="fa fa-star rate"></i>
            <i className="fa fa-star rate"></i>
        </div>
    )
}

export default Rating