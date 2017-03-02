import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import App from './components/App'
import reducer from './reducers'

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
// data = {
//   ...globalstate,
//   selectIndex,
//   page,
//   listsNum,

//   lists: [
//      {
//       index: 0,
//       title: 'List 1',
//       description: 'desc 1',
//       todosNum: 0, // 这种数据是存储还是直接算出来
//       todos: [
//         {
//           id: 0,
//           text: 'todo 111',
//           time: '',
//           complete: false,
//           featured: false,
//           reward: '',
//           remark: '',
//           mode: [1,2,3,4,5,6,7] // 提示模式
//         }
//       ]
//      },
//     ...
//   ]

// }

// 使用 Tab 完成 状态的过滤