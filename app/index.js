import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/Welcome.js';

var element = (
  <div>
    <Welcome name="Guy"/>
    <h1>Hi!</h1>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);