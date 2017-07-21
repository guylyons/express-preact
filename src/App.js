import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import "./App.scss";
import UsStates from "./components/UsStates";

const app = {
  title: "Express/React"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  handleClick(e) {
    this.setState((prevState, props) => ({
      count: prevState.count + 2
    }));
  }
  render() {
    return (
      <main className="container">
        <Navigation title={app.title} />
        <UsStates progress={this.state.count} />
      </main>
    );
  }
}

export default App;
