import { combineReducers } from 'redux'
import data from './todos'
import listIndex from './listIndex'
import visibilityFilter from './visibilityFilter'
import page from './setPage'

const todoApp = combineReducers({
  data,
})


export default todoApp
