// Application bootstrap and rendering
import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/createStore'

// Load SCSS
import './scss/app.scss';

// Store Initialization
// ------------------------------------
const store = createStore(window.__INITIAL_STATE__)

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const App = require('./components/App').default
  const routes = require('./routes/index').default(store)

  ReactDOM.render(
    <App store={store} routes={routes} />,
    MOUNT_NODE
  )
}

// Let's Go!
// ------------------------------------
render()
