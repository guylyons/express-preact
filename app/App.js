import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import NotFound from "./routes/NotFound";

import Navbar from "./components/Navbar";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar/>
        
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

export default App;