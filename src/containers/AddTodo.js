import React from 'react'
import { connect } from 'react-redux'
import store from '../index'
import { addTodo, addList } from '../actions'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    };
  }
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  handleSubmit = () => {
    if (!this.state.value.trim()) {
      return
    }

    const curStore = store.getState().data
    const page = curStore.page
    const index = curStore.selectIndex
    if( page === 'list') {
      this.props.dispatch(addList(this.state.value))
    }  else if (page === 'todo') {
      this.props.dispatch(addTodo(this.state.value, index))
    }

    this.setState({
      value: '',
    });
  }
  handleEnter = (e) => {
    e.key === 'Enter' ? this.handleSubmit() : ''
  }
  render() {
    let input
    return (
      <div>
          <TextField
            hintText="Your todo task"
            value={this.state.value}
            onChange={this.handleChange}
            onKeyPress={this.handleEnter}
          />
          <RaisedButton 
            label="addTODO"
            onClick={this.handleSubmit}
          />
      </div>
    )
  }
}
// If you do not provide your own mapDispatchToProps function when calling connect(), React Redux will provide a default version, which simply returns the dispatch function as a prop.
// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => {
//     dispatch(setVisibilityFilter(ownProps.filter))
//   }
// })

AddTodo = connect()(AddTodo)

export default AddTodo
