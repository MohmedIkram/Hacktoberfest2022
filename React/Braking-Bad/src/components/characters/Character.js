import React from 'react'
import {FaSkullCrossbones} from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

const Character = ({item}) => {
    console.log(item)
    return (
        <div>
            <button onClick={()=>window.history.go(-1)} className="back-button">Back</button>
        <div className="individual-container">
            <div className="img-container">
                <img src={item.img} alt=""/>
            </div>
            <div className="information-container">
               <div><h1 style={{fontFamily:"Quando"}}>Name: </h1> <span className="value">{item.name}</span></div> 
               <div><div style={{fontFamily:"Quando"}}>BirthDate: </div> <span className="value">{item.birthday}</span></div>
               <div><div style={{fontFamily:"Quando"}}>Occupation: </div> <span className="value">{item.occupation.join(", ")}</span></div>
               <div><div style={{fontFamily:"Quando"}}>Nickname: </div> <span className="value">{item.nickname}</span></div>
               <div><div style={{fontFamily:"Quando"}}>Portrayed: </div> <span className="value">{item.portrayed}</span></div>
               <div className="status">
                   {
                       (item.status==="Alive")?<AiFillHeart style={{color:"green",fontSize:"25px"}}/>:<FaSkullCrossbones style={{color:"red",fontSize:"25px"}}/>
                   }
               </div>


               
            </div>
        </div>
        </div>
    )
}

export default Character
