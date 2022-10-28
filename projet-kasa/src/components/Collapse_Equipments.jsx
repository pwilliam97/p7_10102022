// Importation de REACT
import React from 'react'
import { useState } from 'react'


function CollapseEquipments(props){

    const {equipments} = props;

    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);        
    }

    return ( 
        <div>
            <div className='collapse'>
                <div className={`bandeau ${open ? '' : 'close'}`}>
                    <h2 className='bandeau_titre'>Equipements</h2>
                    <button className='bandeau_span' onClick = { toggle }>
                        { open ? <i className='fa-solid fa-angle-up'/> : <i className='fa-solid fa-angle-down'/> }
                    </button>
                </div>
                {open && (
                <li className='descriptif'>{equipments}</li>
                )}
            </div>
        </div>
    )
}

export default CollapseEquipments
