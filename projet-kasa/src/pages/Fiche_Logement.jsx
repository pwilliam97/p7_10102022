// Importation de REACT
import React from 'react'
import { useParams } from 'react-router-dom'

// Importation des Components
import Carroussel from '../components/Carroussel.jsx'
import Tags from '../components/Tags'
import Rating from '../components/Rating'
import CollapseDescription from '../components/Collapse_Description'
import CollapseEquipments from '../components/Collapse_Equipments.jsx'

// Importation des assets
import Logement from '../assets/logements.json'

// Importation du CSS
import '../styles/Fiche_Logement/Fiche_Logement.css'
import '../styles/Collapse_Logement/CollapseLogement.css'

function Fiche_Logement(){
    const {logementId} = useParams();
    const logement = Logement.find((item) => item.id === logementId)

    return (
        <main>
            <Carroussel images = {logement.pictures}/>
            <div className='renseignement'>
                <div className='renseignement_localisation'>
                    <h2>{logement.title}</h2>
                    <h3>{logement.location}</h3>
                    <ul>{(logement.tags).map((tags, index) => <Tags key={index} tags={tags}/>)}</ul>
                </div>
                <div className='renseignement_hebergement'>  
                    <div className='rating'><Rating value={logement.rating}/></div>
                    <div className='host'>
                        <h3 className='host_name'>{logement.host.name}</h3>
                        <img src={logement.host.picture} alt="" className='host_picture'/>
                    </div> 
                </div>
            </div>
            <div className='renseignement_collapse'>
                <CollapseDescription/>
                <CollapseEquipments equipments = {logement.equipments}/>
            </div>
        </main>
    )
}

export default Fiche_Logement


