// Importation de REACT
import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

// Importation des assets
import Logement from '../assets/logements.json'


function CollapseDescription(){
    const {logementId} = useParams();
    const logement = Logement.find((item) => item.id === logementId)

    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);        
    }

    return ( 
        <div className='collapse_description'>
            <div className="barre">
                <h2 className='barre_titre'>Description</h2>
                <button className='barre_span' onClick = { toggle }>
                    { open ? <i className='fa-solid fa-angle-up'/> : <i className='fa-solid fa-angle-down'/> }
                </button>
            </div>
            {open && (
                <div className='deroulant'>
                    <p>{logement.description}</p>
                </div>
            )}
        </div>
    )
}

export default CollapseDescription
