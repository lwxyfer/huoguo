import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import Backspace from 'material-ui/svg-icons/hardware/keyboard-backspace';

import Title from '../../common/Title';
import Footer from '../Footer';
import AddTodo from '../AddTodo';
import VisibleTodos from '../VisibleTodos';
import DetailSetting from '../DetailSetting';

import { addtodo } from '../../actions';

const styles = {
  wrap: {
    display: 'flex',
    height: '100%'
  },
  main: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    overflow: 'auto',
  },
  content: {
    flex: 1,
    padding: '20px',
    overflow: 'auto',
    background: '#ff9966',
    background: '-webkit-linear-gradient(to right, #ff5e62, #ff9966)',
    background: 'linear-gradient(to right, #ff5e62, #ff9966)',
  },
  sidebar: {
    width: '310px'
  }
}

const iconStyle = {
  color: '#fff',
};

const Icon = (
  <Link to="/"><IconButton iconStyle={iconStyle} ><Backspace /></IconButton></Link>
);

export const TodosPage = ({ match }) => (
  <div style={styles.wrap}>
    <div style={styles.main}>
      <Title
        title="Todos"
        showMenuIconButton={false}
      />
      <div style={styles.content}>
        <AddTodo />
        <VisibleTodos selectIndex={match.params.listId} />
        <Footer />
      </div>
    </div>
    <div style={styles.sidebar}>
      <DetailSetting />
    </div>
  </div>
);

export default TodosPage;
