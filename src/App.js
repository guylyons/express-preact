import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import { Jumbotron } from "react-bootstrap";
import Navigation from "./components/Navigation";

import "./App.scss";
import { Button } from "react-bootstrap";
import Posts from "./components/Posts";
import UsStates from "./components/UsStates";

const app = {
  title: "untitled app"
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
        <Jumbotron>
          <h2>
            {app.title}
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button onClick={this.handleClick.bind(this)}>Increment</Button>
          <p>
            Count: {this.state.count}
          </p>
        </Jumbotron>

        {/* this shows that we can pass state to props in this component */}
        <UsStates progress={this.state.count} />
      </main>
    );
  }
}

export default App;
