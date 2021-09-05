import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from 'components/App';

import './styles/index.css';

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    MOUNT_NODE,
  );
};

render();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
