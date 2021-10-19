import React from 'react'
import './Card.style.css'


export const Card = (props) => {
    return (
        <div className="Card">
            <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster" />
            <h1>{props.monster.name}</h1>
            <h2>{props.monster.email}</h2>
        </div>
    )
}


