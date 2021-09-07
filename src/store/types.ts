import store from './store';

type State = ReturnType<typeof store.getState>;

export { State };
