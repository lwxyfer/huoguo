import { connect } from 'react-redux';
import { setListIndex, setPage } from '../../actions';
import TodoLists from './TodoLists';

const mapStateToProps = state => ({

  todolists: state.data.lists || [],
});

const mapDispatchToProps = ({
  onTodoListsClick: setListIndex,
  // onSetPage: setPage,
});

const Lists = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoLists);

export default Lists;
