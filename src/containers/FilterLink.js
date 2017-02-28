import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

// store updated to call this
// 调用的就是 mapStateToProps 而不是其他的
// 必须返回 plain Object, 并且将其设为此组件的 props
// 与此就不用通过 react 的生命周期来设置属性和更新状态
// shouldCompnentUpdate
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

// function
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
