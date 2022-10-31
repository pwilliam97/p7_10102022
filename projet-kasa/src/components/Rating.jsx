// Importation de REACT
import React from 'react'

// Importation des assets
import starFull from '../assets/starFull.png'
import starEmpty from '../assets/starEmpty.png'

function Rating({value: rating}){

    console.log(rating)

    return (
        <div>                 
                <div>                        
                    <img src={rating > 0 ? starFull : starEmpty} alt="rating-stars" />                                             
                    <img src={rating > 1 ? starFull : starEmpty} alt="rating-stars" />                                             
                    <img src={rating > 2 ? starFull : starEmpty} alt="rating-stars" />                                             
                    <img src={rating > 3 ? starFull : starEmpty} alt="rating-stars" />                                             
                    <img src={rating > 4 ? starFull : starEmpty} alt="rating-stars" />                                             
                </div>

        </div>
    )
}

export default Rating
