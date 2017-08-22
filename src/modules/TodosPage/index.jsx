import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import Backspace from 'material-ui/svg-icons/hardware/keyboard-backspace';

import Title from '../../common/Title';
import Footer from '../Footer';
import AddTodo from '../AddTodo';
import VisibleTodos from '../VisibleTodos';

const styles = {
  padding: '20px',
}

const iconStyle = {
  color: '#fff',
};

const Icon = (
  <Link to="/"><IconButton iconStyle={iconStyle} ><Backspace /></IconButton></Link>
);

export const TodosPage = ({ match }) => (
  <div style={styles}>
    <Title
      title="Todos"
      showMenuIconButton={false}
        /*iconElementLeft={Icon}*/     
    />
    <AddTodo
      label="Next"
      text="添加任务"
      selectIndex={match.params.listId}
      page="todo"
    />
    <VisibleTodos selectIndex={match.params.listId} />
    <Footer />
  </div>
);

export default TodosPage;
