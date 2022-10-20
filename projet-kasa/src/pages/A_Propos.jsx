// Importation de REACT
import React from 'react'

// Importation des Components
import Collapse from '../components/Collapse'

// Importation des assets
import Mobile_Banner from '../assets/Propos_Mobile_Banner.png'

const dataCollapse =[
    {
        titre: "Fiabilité" ,
        descriptif: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
        titre: "Respect" ,
        descriptif: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
        titre: "Service" ,
        descriptif: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
        titre: "Sécurité" ,
        descriptif: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    }
]

function A_Propos(){
    return (
        <main>
            <img src={Mobile_Banner} alt="Paysage montagne" className='Propos_Image_Banner'/>
            {dataCollapse.map((item) => <Collapse key={item.titre} item={item} /> )}
        </main>
    )
}
export default A_Propos