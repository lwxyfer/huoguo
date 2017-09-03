import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

const Item = ({ setList, index, title, length, active }) => {
  index = `Index:${index} -- Length: ${length}`;
  return (
    <ListItem
      onClick={setList}
      primaryText={title}
      rightIcon={<p>{length}</p>}
      leftIcon={<ContentInbox />}
      style={active ? {background: 'red'} : null}
    />
  );
};

Item.propTypes = {
  setList: PropTypes.func.isRequired,
  index: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Item;
