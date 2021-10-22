import React from 'react'
import { MdDetails } from "react-icons/md";
import {Link} from "react-router-dom";

const CharacterItem = ({ item }) => {
  return (
    <Link to={`/charcter/${item.char_id}`}>
        <div className='card'>
        <div className='card-inner'>
            <div className='card-front'>
            <img src={item.img} alt='' />
            </div>
        <div className="onHover">
            <div className="text">
                <div style={{fontSize:"20px"}}>View Details</div>
                <MdDetails style={{color:"red",fontSize:"32px",width:"100%"}}/>
            </div>
        </div>
        </div>
        </div>
    </Link>
  )
}

export default CharacterItem