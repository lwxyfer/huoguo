import React from 'react';
import { Link } from 'react-router';
import Title from './Title';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Lists from '../containers/Lists';

import IconButton from 'material-ui/IconButton';
import Backspace from 'material-ui/svg-icons/hardware/keyboard-backspace';

const iconStyle = {
  color: '#fff',
};

const Icon = (
  <Link to="/"><IconButton iconStyle={iconStyle} ><Backspace /></IconButton></Link>
);

export const TodoPage = () => (
  <div>
    <Title
      title="todo"
      iconElementLeft={Icon}
    />
    <AddTodo label="Next" text="添加任务" />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default TodoPage;
