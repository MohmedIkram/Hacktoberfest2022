import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button'

const Note=(props)=>{
    return (
        <div className='note-box' id={props.id}>
           <div className='note-top'>
            <h2>{props.title}</h2> 
            <Button variant="contained"  style={{width:'4rem', height:'3rem'}} onClick={()=>{props.onDelete(props.id)}}><DeleteIcon/></Button>
            </div>
            <p>{props.content}</p>
        </div>
    );
}
export default Note;