import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'components/App';
import configureStore, { State } from 'store';

declare global {
  interface Window {
    __PRELOADED_STATE__: State;
  }
}

const state = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = configureStore(state);
const MOUNT_NODE = document.getElementById('app');

const Root = () => {
  useEffect(() => {
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
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
};

ReactDOM.hydrate(<Root />, MOUNT_NODE);
