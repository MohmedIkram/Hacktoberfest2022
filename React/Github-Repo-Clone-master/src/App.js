import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserPage from './pages/userPage';
import NotFound from './pages/notFound';
import QueryPage from './pages/queryPage/queryPage';

import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={QueryPage}/>
          <Route exact path="/u/:userLogin" component={UserPage}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
