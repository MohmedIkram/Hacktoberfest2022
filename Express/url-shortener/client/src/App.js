import { Shorten, ShortenedURL } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/shorten">{<Shorten />}</Route>
          <Route path="/">{<ShortenedURL />}</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
