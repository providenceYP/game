import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '@/layouts/App';

import '@/styles/index.css';
import './index.css';
import './tailwind.css';

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
