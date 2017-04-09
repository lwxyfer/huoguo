import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'

const loggerMiddleware = createLogger()
 /* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    loggerMiddleware
  )
)
 /* eslint-enable */

export default store
