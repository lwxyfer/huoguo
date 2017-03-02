import React, { PropTypes } from 'react'
import Item from './Item'

const TodoLists = ({ todolists, onTodoListsClick, onSetPage}) => (
  <ul>
    {console.log('todolosts', todolists)}
    {todolists.map(todolist =>
      <Item
        key={todolist.index}
        {...todolist}
        setList={() => { onTodoListsClick(todolist.index); onSetPage('todo') }}
      />
    )}
  </ul>
)

TodoLists.propTypes = {
  todolists: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number.isRequired,
    todos: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onSetPage: PropTypes.func.isRequired,
  onTodoListsClick: PropTypes.func.isRequired,
}

export default TodoLists
