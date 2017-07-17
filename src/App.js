import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import "./App.scss";
import { Button } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <main className="container">
        <h1>Express</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button>Hello</Button>
      </main>
    );
  }
}

export default App;
