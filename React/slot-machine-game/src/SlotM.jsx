import React from 'react';
import Matching from './Matching';
import Notmatching from './Notmatching';

const SlotM = (props) => {

    // let x = '😃';
    // let y = '😃';
    // let z = '🎅';
    
    // let x=props.x;
    // let y=props.y;
    // let z=props.z;

    let {x,y,z}=props; //this is called object destructuring
       
    if(x===y &&y===z)
    {
    return (
    <><h1>{x}{y}{z}</h1>
        <Matching/>
        </>)
    
    }
    else{
        return  (<><h1>{x}{y}{z}</h1>
        <Notmatching/>
        </>)
    }    
    }
export default SlotM;
