import { configureStore } from '@reduxjs/toolkit';

import { PreloadedState } from 'redux';
import { AuthState, LeaderboardState } from 'store/types';

import auth from './slices/auth';
import leaderboard from './slices/leaderboard';

const middlewareConfiguration = { serializableCheck: false };

const reducer = { auth, leaderboard };

type State = { auth?: AuthState; leaderboard?: LeaderboardState };

export default (initialStore?: PreloadedState<State>) =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware(middlewareConfiguration),
    preloadedState: initialStore,
  });

export { State };
