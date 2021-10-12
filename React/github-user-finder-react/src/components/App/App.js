import { Switch, Route } from 'react-router';
import Home from '../Home/Home';
import Userdata from '../Userdata/Userdata';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/user/:id'>
        <Userdata />
      </Route>
    </Switch>
  );
}

export default App;
