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
        <div className='collapse_equipement'>
            <div className="barre">
                <h2 className='barre_titre'>Équipements</h2>
                <button className='barre_span' onClick = { toggle }>
                    { open ? <i className='fa-solid fa-angle-up'/> : <i className='fa-solid fa-angle-down'/> }
                </button>
            </div>
            {open && (
                <div className='deroulant'>
                    <p> 
                        {equipments.map((value, index) => {
                        return <li key={index}>{value}</li>
                        })}
                    </p>
                </div>
            )}
        </div>
    )
}

export default CollapseEquipments
