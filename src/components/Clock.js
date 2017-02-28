import React, { PropTypes } from 'react'

let time = 3;

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: time}
  }
  decent = () => {
    this.setState({
      date: this.state.date -1
    })
    if(this.state.date !== 0) {
      setTimeout(this.decent, 1000)
    } else {
      console.log('finish job')
      this.props.triggerClock()
    }
  }
  handleClick = (e) => {
    e.stopPropagation()
    this.decent()
  }
  reinit = (e) => {
    e.stopPropagation()
    console.log('reinit')
    this.setState({
      date: time
    })
  }
  render() {
    return (
      <span onClick={this.handleClick} style={{display:'inline-block', margin: '0 10px'}}>
        {this.state.date} | &nbsp;
        <span onClick={this.reinit}>reopen</span>
      </span>
    )
  }
}

Clock.PropTypes = {
  triggerClock: PropTypes.func.isRequired
}


