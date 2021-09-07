import { configureStore } from '@reduxjs/toolkit';

import users from './slices/users';

const middlewareConfiguration = { serializableCheck: false };

export default configureStore({
  reducer: { users },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(middlewareConfiguration),
});
