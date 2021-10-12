import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Planet from '../Planet/Planet';

function App() {
  
  return (
    <main>
      <section>
        <Navbar />
        <article>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/earth'></Redirect>
            </Route>
            <Route path='/:id'>
              <Planet />
            </Route>
          </Switch>
        </article>
      </section>
    </main>
  );
}

export default App;
