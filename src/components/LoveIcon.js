import React, { PropTypes } from 'react'
import IconButton from 'material-ui/IconButton'
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border'
import Favorite from 'material-ui/svg-icons/action/favorite'

/*export default class LoveIcon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: false
    }
  }
  handleClick = (e) => {
    this.setState({
      status: !this.state.status
    })
  }
  render() {
    return (
      <IconButton
        tooltip="love"
        onClick={this.handleClick}
      >
        { this.state.status ? <Favorite /> : <FavoriteBorder /> }
      </IconButton>
    )
  }
}*/

const LoveIcon = ({onClick}) => (
  <IconButton
    tooltip="love"
    onClick={(e) => {e.preventDefault(); onClick()}}
  >
     <Favorite />
  </IconButton>
)


export default LoveIcon