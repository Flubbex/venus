import React from 'react';
import ReactDOM from 'react-dom';

import "./style/bulma.css";
import "./style/App.css";

import App from './App';

import registerServiceWorker from './registerServiceWorker';

function render(state){
  console.log("rendering")
  return ReactDOM.render(  <App state={state}/>,document.getElementById('root'));
}

function setup(initialstate){
  var out = render(initialstate);
  registerServiceWorker();
  return out;
}


export {setup,render}
