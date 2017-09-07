import { connect } from 'react-redux';
import { toggleTodo, toggleLove, triggerClock } from '../../actions';
import TodoList from './TodoList';

// set default value
const getVisibleTodos = (allTodos, filter, selectIndex) => {
  // 防止报 ReferenceError 的错误，需要一个包装器

  // console.log('todos', allTodos, filter, selectIndex);

  let todos = Array.isArray(allTodos.lists) &&
  allTodos.lists.filter(list =>
    list.index === selectIndex,
  ).pop();

  todos = todos && todos.todos.length > 0 ? todos.todos : [];

  return todos;
  // switch (filter) {
  //   case 'SHOW_ALL':
  //     return todos;
  //   case 'SHOW_COMPLETED':
  //     return todos.filter(t => t.completed);
  //   case 'SHOW_ACTIVE':
  //     return todos.filter(t => !t.completed);
  //   default:
  //     throw new Error(`Unknown filter: ${filter}`);
  // }
};

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state.data, state.data.visibilityFilter, ownProps.selectIndex),
  selectIndex: ownProps.selectIndex,
});

const mapDispatchToProps = ({
  onTodoClick: toggleTodo,
  onToggleLove: toggleLove,
  onTriggerClock: triggerClock,
});

const VisibleTodos = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodos;
