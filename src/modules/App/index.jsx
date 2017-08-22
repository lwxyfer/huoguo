import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import Title from '../../common/Title';
import AddTodo from '../AddTodo';
import Lists from '../Lists';
import DetailSetting from '../DetailSetting';
import TodosPage from '../TodosPage';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


const styles = {
  entry: {
    height: '100%',
  },
  root: {
    height: '100%',
    display: 'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'space-between',
  },
  layout: {
    maxWidth: '400px',
    minWidth: '300px'
  },
  center: {
    width: '100%',
    background: '#ff9966',
    background: '-webkit-linear-gradient(to right, #ff5e62, #ff9966)',
    background: 'linear-gradient(to right, #ff5e62, #ff9966)',
  }
}

const App = ({ match }) => (
  <div style={styles.entry}>
    <div
      style={styles.root}
    >
      <div style={styles.layout}>
        <Title title="List" />
        <Lists />
        <AddTodo label="ADD" text="创建清单" page="list" />
      </div>
      <div style={styles.center}>
        <Route exact path="/" render={() => <Title title="do" />} />
        <Route path="/todo/:listId" component={TodosPage} />
      </div>
      <div style={styles.layout}>
        <DetailSetting />
      </div>
    </div>
  </div>
);

export default App;
