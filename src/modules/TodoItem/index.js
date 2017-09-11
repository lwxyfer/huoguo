import React, { PropTypes } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Checkbox from '../../components/CheckBox';

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
    marginLeft: '15px',
    marginRight: '5px',
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
      onCheck={props.handleToggle}
      defaultChecked={props.completed}
    />
    <p
      style={styles.button}
    >
      { props.text }
    </p>
    <Checkbox
      style={styles.toggle}
      onCheck={props.handleLove}
      defaultChecked={props.love}
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
