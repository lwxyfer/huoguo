import React from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';
import { Provider } from 'react-redux';
import App from './components/App';
import TodoPage from './components/TodosIndex';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route exact path="/" component={App} />
      <Route path="/todo" component={TodoPage} />
    </Router>
  </Provider>
);

export default Root;
