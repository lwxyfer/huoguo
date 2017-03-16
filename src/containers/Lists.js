import { connect } from 'react-redux'
import { setListIndex, setPage } from '../actions'
import TodoLists from '../components/TodoLists'

const todoLength = (data) => (
  data.lists[data.selectIndex] && data.lists[data.selectIndex].todos.length || 0
)

const mapStateToProps = (state) => ({
  todolists: state.data.lists || [],
  listlength: state.data.lists.length,
  todolength: todoLength(state.data)
})

const mapDispatchToProps = ({
  onTodoListsClick: setListIndex,
  onSetPage: setPage
})

const Lists = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoLists)

export default Lists