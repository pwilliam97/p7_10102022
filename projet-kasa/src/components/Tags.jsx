// Importation de REACT
import React from 'react'

function Tags(props){

    const {tags} = props; // const item = props.item
    // const [position] = useState(0)

    return ( 
        <li>{tags}</li>
    )
}

export default Tags