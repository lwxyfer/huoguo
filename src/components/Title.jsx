import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

const titleStyle = {
  fontSize: 16,
};

const Title = props => (
  <AppBar
    titleStyle={titleStyle}
    {...props}
  />
);

export default Title;
