import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

 /* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
 /* eslint-enable */

const render = (Component) => {
  ReactDOM.render(
      <Provider store={store}>
        <Component />
      </Provider>,
    document.getElementById('root')
  );
};

render(App)

export default store;

// Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./components/App', () => {
//     render(App)
//   });
// }

// the same stucture
// lists: {
//   id: 0,
//   title: 'List 1',
//   description: 'desc 1',
//   todos: [
//     {
//       id: 0,
//       text: 'todo 111',
//       complete: false
//     }
//   ]
//   ...
// }