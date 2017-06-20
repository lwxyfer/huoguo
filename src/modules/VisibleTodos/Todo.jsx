import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import LoveIcon from '../../common/LoveIcon';
import IconButton from 'material-ui/IconButton';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Favorite from 'material-ui/svg-icons/action/favorite';

const IconButtonElement = ({ toggleLove, love }) => (
  <IconButton
    touch
    tooltip="more"
    onClick={toggleLove}
  >
    { love ? <Favorite color="red" /> : <Favorite /> }
  </IconButton>
);

const Todo = ({ toggleTodo, toggleLove, completed, love, text, number, triggerClock, isChecked }) => (
  <ListItem
    leftCheckbox={<Checkbox onCheck={toggleTodo} checked={completed} />}
    primaryText={text}
    secondaryText={number || 0}
    rightIconButton={<IconButtonElement toggleLove={toggleLove} love={love} />}
  />
);

Todo.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  toggleLove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;

// there is something wrong with ListItem, when click
// [ ] click 触犯了两次 dispatch
// [x] 这里定义的是事件还是 prop ，有点蒙蔽
// 或者说 material 的问题？
