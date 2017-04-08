import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { rootReducer } from './reducers';

const logger = createLogger({});

export const Store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware,logger)
);

