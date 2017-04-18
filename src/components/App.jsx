import React from 'react';
import Title from './Title';
import AddTodo from '../containers/AddTodo';
import Lists from '../containers/Lists';

const App = () => (
  <div>
    <Title title="List" />
    <AddTodo label="ADD" text="创建清单" />
    <Lists />
  </div>
);

export default App;
