import Fab from '@material-ui/core/Fab';
import React, { useState, useEffect} from 'react';
import AddIcon from '@material-ui/icons/Add';

const InputBar=(props)=>{
    let [tempTitle,setTempTitle]=useState();
    let [tempContent,setTempContent]=useState();

    
     let input1,input2;
    // function for tracking changed value of title
    const changeTitle=(e)=>{
       
       setTempTitle(e.target.value);
    //    console.log(tempTitle);
        }
    // function for tracking changed value of tempContent
    const changeContent=(e)=>{
        setTempContent(e.target.value);
        // console.log(tempContent);
    }
    let x=document.getElementById('inTitle');
    const showTitle=()=>{
        let x=document.getElementById('inTitle');
        x.style.display='inline-block';
    }       
    
    return (
    <div className='input-bar'>
        <input name='title' className='title' style={{display:'none',}} id='inTitle' placeholder='Title' onChange={changeTitle} />

        <input name='note' id='inContent' placeholder='Add a Note' onChange={changeContent} onClick={ showTitle  }  />

        <Fab className='btn' onClick={()=>{  props.onInput(tempTitle,tempContent)}} style={{width:'5rem', height:'5rem'}}><AddIcon /></Fab>
    </div>
    );
}
export default InputBar;
