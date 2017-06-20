import { connect } from 'react-redux';
import { setListIndex, setPage } from '../../actions';
import TodoLists from './TodoLists';

// TODO: 多层嵌套的对象，需要确保每层都在。如果层级深了，是很麻烦的。
const todoLength = data => (
  data.lists[data.selectIndex] && data.lists[data.selectIndex].todos.length || 0
);

const mapStateToProps = state => ({
  todolists: state.data.lists || [],
  listlength: state.data.lists.length,
  todolength: todoLength(state.data),
  selectIndex: state.data.selectIndex,
});

const mapDispatchToProps = ({
  onTodoListsClick: setListIndex,
  onSetPage: setPage,
});

const Lists = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoLists);

export default Lists;
