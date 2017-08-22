import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import { addTodo, addList } from '../../actions'
import store from '../../store'

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
  }

  handleSubmit = () => {
    if (!this.state.value.trim()) {
      return
    }

    // const curStore = store.getState().data
    const page = this.props.page
    // const index = curStore.selectIndex

    if( page === 'list') {
      this.props.dispatch(addList(this.state.value))
    }  else if (page === 'todo') {
      console.log('todo page')
      this.props.dispatch(addTodo(this.state.value, this.props.selectIndex))
    }

    this.setState({
      value: '',
    });
  }

  handleEnter = (e) => {
    e.key === 'Enter' ? this.handleSubmit() : ''
  }

  render() {
    let {
      label,
      text,
      ...props
    } = this.props;

    return (
      <div>
        <TextField
          hintText={text}
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleEnter}
        />
        <RaisedButton
          label={label}
          onClick={this.handleSubmit}
        />
      </div>
    )
  }
}

AddTodo = connect()(AddTodo)

export default AddTodo