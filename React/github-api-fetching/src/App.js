import React, {useEffect, useState} from 'react'
import './App.css';
import Loading from './Loading';
import Users from './Users';

function App() {
  
  const [user, setUser] = useState([]);
const[loading,setLoading]=useState(true);
  
  
  const GetUserData = async ()=>
  {

    try{
      setLoading(false);
      const  response = await fetch('http://jsonplaceholder.typicode.com/albums/1/photos')
  
    setUser(await response.json())

    }
    catch(error){
        console.log(`error is: ${error}`)
    }
    
    useEffect(() => {
      GetUserData();
    }, [])
  }
  

  if(loading){
    return<Loading/>
  }

  return (
    <div className="app">
    <Users  data={user}/>

    </div>

    
  )
}

export default App
