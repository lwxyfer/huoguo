import { combineReducers } from 'redux'
import data from './todos'


const todoApp = combineReducers({
  data,
})


export default todoApp;
