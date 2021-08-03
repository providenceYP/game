import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import createReducer from '../reducers';

export default function configureStore(initialState = {}, history) {
	let composeEnhancers = compose;

	if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
		/* eslint-disable no-underscore-dangle */
		if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
    }
		/* eslint-enable */
	}

	const store = createStore(
		createReducer(),
		initialState,
    compose(applyMiddleware(thunkMiddleware))
	);

	// store.injectedReducers = {};

	// Make reducers hot reloadable, see http://mxs.is/googmo
	// if (module.hot) {
	// 	module.hot.accept('./reducers', () => {
	// 		store.replaceReducer(createReducer(store.injectedReducers));
	// 	});
	// }

	return store;
}
