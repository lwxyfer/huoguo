import React from 'react';
import { connect } from 'react-redux';
import InputItem from '../../components/InputItem';
import { addTodo } from '../../actions';
import store from '../../store';

class AddTodo extends React.Component {

  constructor(props) {
    super(props)
  }

  handleSubmit = (value) => {
    console.log(this.props)
    this.props.dispatch(addTodo(value, store.getState().data.selectIndex))
  }

  render() {
    return (
      <InputItem
        label="ADD"
        text="创建清单"
        onSubmit={this.handleSubmit}
      />
    )
  }
}

AddTodo = connect()(AddTodo)

export default AddTodo
