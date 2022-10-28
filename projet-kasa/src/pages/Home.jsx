// Importation de REACT
import React from 'react'

// Importation des Components
import Banner from '../components/Banner'
import Cards from '../components/Cards'

// Importation du CSS

// Importation des assets
import Logement from '../assets/logements.json'

function Home(){

    return (
        <main>
            <div>
                <Banner/>
                <div className='cards_Div'>{Logement.map((item) => <Cards item = {item} key = {item.id}/>)}</div>
            </div>
        </main>
    )
}

export default Home
