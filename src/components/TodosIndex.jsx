import React from 'react';
import { Link } from 'react-router';
import Title from './Title';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Lists from '../containers/Lists';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Backspace from 'material-ui/svg-icons/hardware/keyboard-backspace';

const Icon = (
  <Link to="/"><IconButton><Backspace /></IconButton></Link>
);

export const TodoPage = () => (
  <div>
    <AppBar
      title="todo"
      iconElementLeft={Icon}
    />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default TodoPage;
