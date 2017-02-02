import React from 'react';
import { render } from 'react-dom';

let boot;
const ROOT = document.getElementById('react-root');

if (IS_DEV) {
  const AppContainer = require('react-hot-loader').AppContainer;

  boot = (component) => {
    render(<AppContainer>{component}</AppContainer>, ROOT);
  };
}

if (IS_PROD) {
  boot = (component) => {
    render(component, ROOT);
  };
}

export default boot;
