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
        <div className='collapse'>
            <div className={`bandeau ${open ? '' : 'close'}`}>
                <h2 className='bandeau_titre'>Description</h2>
                <button className='bandeau_span' onClick = { toggle }>
                    { open ? <i className='fa-solid fa-angle-up'/> : <i className='fa-solid fa-angle-down'/> }
                </button>
            </div>
            {open && (
                <div className='descriptif'>
                    <p>{logement.description}</p>
                </div>
            )}
        </div>
    )
}

export default CollapseDescription
