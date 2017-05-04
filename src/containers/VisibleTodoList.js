import { connect } from 'react-redux';
import { toggleTodo, toggleLove, triggerClock } from '../actions';
import TodoList from '../components/TodoList';

// set default value
const getVisibleTodos = (allTodos, filter) => {
  console.log('todos', todos);

  const todos = allTodos.lists.filter(list =>
    list.index === allTodos.selectIndex,
  )[0].todos;

  console.log('i am data', todos);
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.data, state.data.visibilityFilter),
});

const mapDispatchToProps = ({
  onTodoClick: toggleTodo,
  onToggleLove: toggleLove,
  onTriggerClock: triggerClock,
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;
