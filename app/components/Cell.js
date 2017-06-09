import React from "react";
import "material-design-lite/material.min.css";
import "material-design-lite";

class Cell extends React.Component {
  render() {
    return (
      <div className="mdl-cell">
        {this.props.content}
      </div>
    )
  }
}

export default Cell;