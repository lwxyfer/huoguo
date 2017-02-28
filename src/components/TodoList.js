import React, { PropTypes } from 'react'
import Todo from './Todo'
import Divider from 'material-ui/Divider'
import List from 'material-ui/List'

const TodoList = ({ todos, onTodoClick, onToggleLove, onTriggerClock }) => (
  <List>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        toggleTodo={() => onTodoClick(todo.id)}
        toggleLove={() => onToggleLove(todo.id)}
        triggerClock={() => onTriggerClock(todo.id)}
      />
    )}
  </List>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onToggleLove: PropTypes.func.isRequired,
  onTriggerClock: PropTypes.func.isRequired
}

export default TodoList
