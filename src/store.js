import reducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';

const loggerMiddleware = createLogger();
 /* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(
    applyMiddleware(loggerMiddleware),
    autoRehydrate(),
  ),
);
 /* eslint-enable */
persistStore(store);

export default store;
