import React from 'react';
import ReactDOM from 'react-dom';

import "./style/bulma.css";
import "./style/App.css";

import App from './App';

import registerServiceWorker from './registerServiceWorker';

function render(state){
  ReactDOM.render(  <App state={state}/>,document.getElementById('root'));
}

function setup(initialstate){
  render(initialstate);
  registerServiceWorker();
}


export {setup,render}
