import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import {
  Link,
} from 'react-router-dom';

import Item from './Item';

const TodoLists = ({ todolists, onTodoListsClick, onSetPage, listlength, todolength }) => (
  <List>
    <Subheader>你的清单：{listlength} </Subheader>
    {todolists.map(todolist =>
      <Link to={`/todo/${todolist.index}`} key={todolist.index}>
        <Item
          key={todolist.index}
          setList={() => {
            onTodoListsClick(todolist.index);
            onSetPage('todo');
          }}
          length={todolist.todos.length || 0}
          {...todolist}
        />
      </Link>,
    )}
  </List>
);

TodoLists.propTypes = {
  todolists: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.string.isRequired,
    todos: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onSetPage: PropTypes.func.isRequired,
  onTodoListsClick: PropTypes.func.isRequired,
  listlength: PropTypes.number.isRequired,
  todolength: PropTypes.number.isRequired,
};

export default TodoLists;
