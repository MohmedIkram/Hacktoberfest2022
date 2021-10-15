import React, { useState } from "react";
import { data } from "./info";
import './index.css';

const App = () => {
  const [people, setPeople] = useState(data);
  const clear=()=>{
    setPeople([])
  }
  const Delete=(id)=>{
    let finalPerson=people.filter((person)=>{
      if(person.id!==id){return true}
      else return false
    })
    setPeople(finalPerson)
  }
  return (
    <main>
      <section className='container'>
        <button type="button" className=" my-4 btn btn-light position-relative">
        Birthday entries
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {people.length}
          <span className="visually-hidden">unread messages</span>
        </span>
      </button>
        <List people={people} Delete={(idx)=>{Delete(idx)}}/>
        <button
        type="button"
        onClick={clear}
        className=" my-3 btn btn-secondary" style={{width:"100px" }}
      >
        Clear
      </button>
      </section>
    </main>
  );
};

export const List = (props) => {
  return (
    <div>
      {props['people'].map((person) => {
        const { id, name, image, date } = person;
        return (
          <>
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{date}</p>
            </div>
            <button onClick={()=>props.Delete(id)} className=" btn btn-primary" style={{backgroundColor:"",borderRadius:'50px',width:'100px',marginTop:'5px'}}>Delete</button>
          </article>
          <hr />
          </>
        );
      })}
    </div>
  );
};

export default App;