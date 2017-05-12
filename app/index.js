import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/Welcome.js';

var element = (
  <div>
    <Welcome name="Guy"/>
    <Welcome name="Justin"/>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);