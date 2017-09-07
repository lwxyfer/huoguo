import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


class InputItem extends React.Component {

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

    this.props.onSubmit && this.props.onSubmit(this.state.value);

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

export default InputItem
