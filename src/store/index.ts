import { configureStore } from '@reduxjs/toolkit';

import { PreloadedState } from 'redux';
import { AuthState } from 'store/types';
import auth from './slices/auth';

const middlewareConfiguration = { serializableCheck: false };

const reducer = { auth };
type State = { auth?: AuthState };

export default (initialStore?: PreloadedState<State>) =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware(middlewareConfiguration),
    preloadedState: initialStore,
  });

export { State };
