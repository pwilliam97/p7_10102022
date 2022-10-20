// Importation de REACT
import React from 'react'

// Importation des Components
import Banner from '../components/Banner'
import Cards from '../components/Cards'

// Importation du CSS

// Importation des assets
import logement from '../assets/logements.json'

// import Logements from '../logements.json'


function Home(){

    return (
        <main>
            <div className='home_Main'>
                <Banner/>
                {logement.map((item) => <Cards item = {item} key = {item.id}/>)}
            </div>
        </main>

        //faire boucle for each pour afficher la card avec titre et image
    )
}

export default Home
