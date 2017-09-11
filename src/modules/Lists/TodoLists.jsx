import React, { PropTypes } from 'react';
import {
  Link,
} from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import ContentInbox from 'material-ui/svg-icons/content/inbox';


const TodoLists = ({ todolists, onTodoListsClick }) => (
  <List>
    <Subheader>你的清单：{todolists.length} </Subheader>

    {todolists.map(todolist =>
      /* <Link to={`/todo/${todolist.index}`} key={todolist.index}> */
        <ListItem
          key={todolist.index}
          onClick={() => {
            console.log(Date.now())
            onTodoListsClick(todolist.index);
          }}
          primaryText={todolist.title}
          rightIcon={<p>{todolist.todos.length}</p>}
          leftIcon={<ContentInbox />}
        />
      /*</Link>, */
    )}
  </List>
)

TodoLists.propTypes = {
  todolists: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.string.isRequired,
    todos: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoListsClick: PropTypes.func.isRequired,
};

export default TodoLists;
