import React, { PropTypes } from 'react'
import {List, ListItem} from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import LoveIcon from './LoveIcon'
import IconButton from 'material-ui/IconButton'
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border'
import Favorite from 'material-ui/svg-icons/action/favorite'

const IconButtonElement = ({onClick}) => (
  <IconButton
    touch={true}
    tooltip="more"
    onClick={onClick}
  >
    <Favorite />
  </IconButton>
);

const Todo = ({ toggleTodo, toggleLove, completed, text, number, triggerClock }) => (
  <ListItem
    leftCheckbox={<Checkbox onCheck={toggleTodo} />}
    primaryText={text}
    secondaryText={number || 0}
    /*rightIconButton={<IconButtonElement onClick={toggleLove} />}*/
  />
)

Todo.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  toggleLove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo

// there is something wrong with ListItem, when click
// [ ] click 触犯了两次 dispatch
// [x] 这里定义的是事件还是 prop ，有点蒙蔽
// 或者说 material 的问题？