import React from "react";
import ReactDOM from "react-dom";
import Cell from "./components/Cell.js";

const element = (
  <main>
    <div className="mdl-grid">
      <div className="mdl-cell">
        <h1>Express React App</h1>
      </div>
    </div>
    <div className="mdl-grid">
      <Cell content="Cell Content"></Cell>
    </div>
  </main>
);

ReactDOM.render(
  element,
  document.getElementById("root")
);
