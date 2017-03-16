import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import {App, TodoPage} from './components/App'

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        
      <Route path="/todos" component={TodoPage} />
      </Route>
    </Router>
  </Provider>
);

export default Root