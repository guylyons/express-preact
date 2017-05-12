import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/test.css';

class Welcome extends React.Component {
  render() {
    return (
      <div className="tag">
        <h1>Hello, {this.props.name}.</h1>
      </div>
    )
  }
}

export default Welcome;