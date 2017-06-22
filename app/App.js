import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import NotFound from "./routes/NotFound";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route component={NotFound}/>
        </Switch>
        
        <Footer />
      </div>
    )
  }
}

export default App;