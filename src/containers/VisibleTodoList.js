import { connect } from 'react-redux'
import { toggleTodo, toggleLove, triggerClock } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  todos = (todos.todolists[todos.listIndex] && todos.todolists[todos.listIndex].todos) || [];
  console.log(todos)
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state, state.visibilityFilter)
})

const mapDispatchToProps = ({
  onTodoClick: toggleTodo,
  onToggleLove: toggleLove,
  onTriggerClock: triggerClock
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
