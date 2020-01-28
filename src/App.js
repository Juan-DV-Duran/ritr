import React from "react";
import "./styles.css";
import "./Dashboard.js";
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
              <Link to="/safetyofficer" className="whiteLink">
                Safety Officer
              </Link>
            </li>
            <li>
              <Link to="/employee" className="whiteLink">
                Employee
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/safetyofficer">
            <About />
          </Route>
          <Route path="/employee">
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
