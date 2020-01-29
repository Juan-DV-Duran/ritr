import React from "react";
import "./styles.css";
import { GalacticRimMap } from "./GalacticRimMap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App-header">
          <ul className="Nav">
            <li>
              <Link to="/" className="whiteLink">
                Home
              </Link>
            </li>
            <li>
              <Link to="/rimmap" className="whiteLink">
                Galactic Rim Map
              </Link>
            </li>
            <li>
              <Link to="/tables" className="whiteLink">
                Tables
              </Link>
            </li>
            <li>
              <Link to="/about" className="whiteLink">
                About
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/rimmap">
            <GalacticRimMap />
          </Route>
          <Route path="/tables">
            <About id={3} />
          </Route>
          <Route path="/about">
            <About id={3} />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function About() {
  return (
    <div className="About">
      <h2 className="ritr">Rebellion in the Rim Campaign Tracker</h2>
      <p>
        Rebellion in the Rim Campaign Tracker is a personal project of mine to
        better track and manage the campaign for my local group.
      </p>
    </div>
  );
}

export default App;
