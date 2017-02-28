import { combineReducers } from 'redux'
import todolists from './todos'
import listIndex from './listIndex'
import visibilityFilter from './visibilityFilter'
import page from './setPage'

const todoApp = combineReducers({
  todolists,
  visibilityFilter,
  listIndex,
  page
})

export default todoApp
