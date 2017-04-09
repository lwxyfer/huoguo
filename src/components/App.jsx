import React from 'react';
import { Link } from 'react-router';
import Title from './Title';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Lists from '../containers/Lists';

import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/hardware/cast';

const App = () => (
  <div>
    <Title title="List" />
    <AddTodo />
    <Lists />
  </div>
);

export default App;
