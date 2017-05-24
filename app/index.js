import React from "react";
import ReactDOM from "react-dom";
import Modal from "./components/Modal";

const element = (
  <div>
    <Modal message="Here, test out the modal." />
  </div>
);

ReactDOM.render(
  element,
  document.getElementById("root")
);
