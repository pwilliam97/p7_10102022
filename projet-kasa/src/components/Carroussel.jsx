// Importation de REACT
import React from 'react'
import {useState} from 'react'

// Importation du CSS 
import '../styles/Carroussel/Carroussel.css'

function Carroussel (props){
    const {images} = props
    const [position, setPosition] = useState(0) 
    const imageSuivante = () => {
        if (position+1 === images.length) {
            setPosition(0)
        }
        else {
            setPosition(position+1)
        }
    }

    const imagePrecedente = () => {
        if (position === 0) {
            setPosition(images.length-1)
        }
        else {
            setPosition(position-1)
        }
    }

    return (
        <div className='carroussel'>
            <img src={images[position]} alt="" />
            <div className='carroussel_swipe'>
                <button onClick = {imagePrecedente}><i className='fa-solid fa-angle-left'/></button>
                <button onClick = {imageSuivante}><i className='fa-solid fa-angle-right'/></button>
            </div>
        </div>
    )
}


export default Carroussel