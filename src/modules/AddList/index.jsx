import React from 'react';
import { connect } from 'react-redux';
import InputItem from '../../components/InputItem';
import { addList } from '../../actions';

class AddList extends React.Component {

  constructor(props) {
    super(props)
  }

  handleSubmit = (value) => {
    this.props.dispatch(addList(value))
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

AddList = connect()(AddList)

export default AddList
