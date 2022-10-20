// Importation de REACT
import React from 'react'
import { useState } from 'react'

// Importation du CSS
import '../styles/Collapse/Collapse.css'

function Collapse(props){

    const { item } = props; // const item = props.item
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);        
    }

    return ( 
        <div className='collapse'>
            <div className={`bandeau ${open ? '' : 'close'}`}>
                <h2 className='bandeau_titre'>{item.titre}</h2>
                <button className='bandeau_span' onClick = { toggle }>
                    { open ? <i className='fa-solid fa-angle-up'/> : <i className='fa-solid fa-angle-down'/> }
                </button>
            </div>
            {open && (
                <div className='descriptif'>
                    <p>{item.descriptif}</p>
                </div>
            )}
        </div>
    )
}

export default Collapse

