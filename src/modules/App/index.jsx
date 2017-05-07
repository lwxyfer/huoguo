import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import Title from '../../common/Title';
import AddTodo from '../AddTodo';
import Lists from '../Lists';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import TodosPage from '../TodosPage';

import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const App = () => (
  <div>
    <GridList
      cellHeight={800}
    >
      <GridTile>
        <Title title="List" />
        <AddTodo label="ADD" text="创建清单" />
        <Lists />
      </GridTile>
      <GridTile>
        <Route exact path="/" render={() => <div>world</div>} />
        <Route path="/todo" component={TodosPage} />
      </GridTile>
    </GridList>
  </div>
);

export default App;
