import { combineReducers } from 'redux';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    ...injectedReducers
  });

  return rootReducer;
}
