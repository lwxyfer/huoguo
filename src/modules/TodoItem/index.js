import React, { PropTypes } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

const styles = {
  root: {
    height: '60px',
    display: 'flex',
    flexWrap: 'no-wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toggle: {
    maxWidth: '50px',
  },
  button: {
    width: '100%',
  },
  love: {
    width: 24,
    margin: '0 10px',
  },
};

const TodoItem = ({ ...props }) => (
  <div
    style={styles.root}
  >
    <Checkbox
      style={styles.toggle}
      onCheck={props.handleToggle}
      defaultChecked={props.completed}
    />
    <p
      style={styles.button}
    >
      { props.text }
    </p>
    <Checkbox
      checkedIcon={<ActionFavorite />}
      uncheckedIcon={<ActionFavoriteBorder />}
      style={styles.love}
      defaultChecked={props.love}
      onCheck={props.handleLove}
    />
  </div>
);

TodoItem.propTypes = {
  handleToggle: PropTypes.func,
  handleLove: PropTypes.func,
  text: PropTypes.string,
  completed: PropTypes.bool,
  love: PropTypes.bool,
};

export default TodoItem;
