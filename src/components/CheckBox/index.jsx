import React, { PropTypes } from 'react';

// optimize render speed:
// use SVG in JSX directly
// DO NOT USE MATERIAL ICON
const CheckSvg = (style) => ( 
  <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" style={style}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
)

const CheckOutSvg = (style) => (
  <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" style={style}>
    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)

export default class Checkbox extends React.Component {

  static propTypes = {
    checked: PropTypes.bool
  }
  
  state = {
    checked: this.props.defaultChecked || false
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.checked !== undefined) {
      this.setState({
        checked: nextProps.checked
      })
    }
  }

  handleClick = () => {
    this.setState({
      checked: !this.state.checked
    })
    this.props.onCheck && this.props.onCheck();
  }

  render() {

    const style = Object.assign({
      verticalAlign: 'middle'
    }, this.props.style)

    return (
      <div onClick={this.handleClick}>
        {this.state.checked ?
          <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" style={style}>
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg> :
          <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" style={style}>
            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        }
      </div>
    )
  }
}