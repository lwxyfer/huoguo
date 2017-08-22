import React, { PropTypes } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

const styles = {
  root: {
    height: '46px',
    display: 'flex',
    flexWrap: 'no-wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '3px',
    marginBottom: '1px',
    color: '#262626',
    fontSize: '15px',
    background: '#fff',
  },
  toggle: {
    maxWidth: '50px',
    marginLeft: '20px',
    color: '#262626',
  },
  button: {
    width: '100%',
  },
  love: {
    width: 24,
    margin: '0 20px',
  },
  icon: {
    fill: 'rgba(0, 0, 0, 0.5)'
  }
};

const TodoItem = ({ ...props }) => (
  <div
    style={styles.root}
  >
    <Checkbox
      style={styles.toggle}
      iconStyle={styles.icon}
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
      iconStyle={styles.icon}
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
