import { connect } from 'react-redux'
import { setListIndex, setPage } from '../actions'
import TodoLists from '../components/TodoLists'

const mapStateToProps = (state) => ({
  todolists: state.todolists
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