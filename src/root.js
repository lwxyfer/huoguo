import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './modules/App';
import TodoPage from './modules/TodosPage';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/todo" component={App} />
        <Route path="*" render={() => <div>404</div>} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
