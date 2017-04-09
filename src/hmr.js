import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import Index from './index';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(Index);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./index', () => {
    render(Index)
  });
}
