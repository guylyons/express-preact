import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom';
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";

ReactDOM.render(
  <HashRouter>
    <App/>
  </HashRouter>,
  document.getElementById("root")
);
