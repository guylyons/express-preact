import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";

const App = (
  <main>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        
        
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
      </div>
    </Router>
  </main>
);

ReactDOM.render(
  App,
  document.getElementById("root")
);
