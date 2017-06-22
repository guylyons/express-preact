import React from "react";
import { Route, Switch } from "react-router-dom";
import _ from "lodash";

import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import NotFound from "./routes/NotFound";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <main>
        <div className="container App">
          
          <Navbar />
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
          
          <Footer />
          
        </div>
      </main>
    )
  }
}

export default App;