import { configureStore } from '@reduxjs/toolkit';

import auth from './slices/auth';

type State = ReturnType<typeof store.getState>;

const middlewareConfiguration = { serializableCheck: false };

export const store = configureStore({
  reducer: { auth },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(middlewareConfiguration),
});

export { State };
