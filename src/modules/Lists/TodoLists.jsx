import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import {
  Link,
} from 'react-router-dom';

import Item from './Item';
import ContentInbox from 'material-ui/svg-icons/content/inbox';


const TodoLists = ({ todolists, onTodoListsClick, onSetPage, listlength, todolength, selectIndex }) => {

  // index = `Index:${index} -- Length: ${length}`;
  return  (
  <List>
    <Subheader>你的清单：{listlength} </Subheader>
    {todolists.map(todolist =>
      <Link to={`/todo/${todolist.index}`} key={todolist.index}>
        <ListItem
          key={todolist.index}
          onClick={() => {
            onTodoListsClick(todolist.index);
          }}
          primaryText={todolist.title}
          rightIcon={<p>{todolength}</p>}
          leftIcon={<ContentInbox />}
        />
      </Link>,
    )}
  </List>
  )
};

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
