import React, { PropTypes } from 'react';
import Todo from './Todo';
import Divider from 'material-ui/Divider';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import TodoItem from '../TodoItem';

const TodoList = ({ todos, onTodoClick, onToggleLove, onTriggerClock, selectIndex }) => (
  <List>
    <Subheader>TODOS： { selectIndex }</Subheader>
    {todos.slice().reverse().map(todo =>
      <TodoItem
        key={todo.id}
        {...todo}
        handleToggle={() => onTodoClick(todo.id, selectIndex)}
        handleLove={() => onToggleLove(todo.id, selectIndex)}
        triggerClock={() => onTriggerClock(todo.id, selectIndex)}
      />,
    )}
  </List>
)


TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onToggleLove: PropTypes.func.isRequired,
  onTriggerClock: PropTypes.func.isRequired,
};

export default TodoList;
