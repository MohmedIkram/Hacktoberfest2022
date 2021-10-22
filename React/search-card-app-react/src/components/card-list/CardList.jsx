import React from 'react';
import { Card } from '../card/Card';
import './CardList.style.css'

export const CardList = (props) => {
    return (
        <div className="CardList">
            {
            props.monsters.map(monster => (
                 <Card key={monster.id} monster={monster}/>
                )) }
            
        </div>
    )
}


