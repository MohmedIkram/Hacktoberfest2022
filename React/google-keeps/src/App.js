import React , { useState ,useEffect } from 'react';
import './App.css';
import Header from './header';
import Note from './note';
import InputBar  from './inputBar';


function App() {

  
  const [data,setData]=useState([{title:null,content:null}]);

  const check=(m,n)=>{
     
     
     setData( (element=>{
        return [...element,{title:m,content:n}];
      }));
      // for resetting values after entry
      let y= document.getElementById('inContent');
      let x= document.getElementById('inTitle');
       y.value=null;
       x.value=null;
       x.style.display='none';
   
      }

      const deleteIt=(e)=>{
        setData ( data.filter( (element,index)=>{
          return ( e!=index);

        }
          
        ) );
   
      }


   const show = data.map( (element,index)=>{
     if (index!=0)  
     return <Note title={element.title} content={element.content} id={index}  onDelete={deleteIt}/>;
   });    




  return (
    <>
    <Header/>
   <div className='input-container'>
     <InputBar onInput={check} />
   </div>
   <div className='note-container'>
    {show}
    
   </div>
    </>
  );
}

export default App;
