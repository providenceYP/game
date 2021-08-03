import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './containers/App';

import configureStore from './utils/configureStore';

const initialState = {};
const store = configureStore(initialState);
const MOUNT_NODE = document.getElementById('app');

const render = () => {
	ReactDOM.render(
		<Provider store={store}>
      <Router>
					<App />
      </Router>
		</Provider>,
		MOUNT_NODE,
	);
};

render();
