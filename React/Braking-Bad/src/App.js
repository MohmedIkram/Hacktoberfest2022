import './App.css';
import Header from "./components/ui/Header"
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import CharacterGrid from "./components/characters/CharacterGrid"
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import IndividualCharacter from "./components/characters/IndividualCharacter"

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [query,setQuery] = useState("")

  console.log(query)
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(result.data)
      setIsLoading(false);
    }
    fetchItems();
    
  }, [query])

  return (
    <div className="container">
      <Header/>
      <Router>
        <Switch>
          <Route path="/breaking-bad/" exact={true}  render={()=><CharacterGrid setQuery={setQuery} items={items} query={query} isLoading={isLoading}/>}/>
          <Route path="/charcter/:id" component={IndividualCharacter}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
