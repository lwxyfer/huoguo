import React from 'react';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import {GridList, GridTile} from 'material-ui/GridList';
import DatePicker from 'material-ui/DatePicker';

import DateRangeIcon from 'material-ui/svg-icons/action/date-range';
import AlarmIcon from 'material-ui/svg-icons/action/alarm';
import AddIcon from 'material-ui/svg-icons/content/add';
import CreateIcon from 'material-ui/svg-icons/content/create';

import TodoItem from '../TodoItem';

const styles = {
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textField: {
    width: '100%',
    marginLeft: '10px',
    cursor: 'default'
  },
  iconStyle: {
    fill: '#a3a3a2'
  },
  datePicker: {
    width: '200px',
  },
  datePickerContainer: {
    width: '300px !important',
  }
}

const DetailList = ({...props}) => (
  <div style={styles.list} {...props} >
    { props.children }
  </div>
)

export const DetailSetting = () => (
  <div>
    <TodoItem text='我是title' />
    <DetailList>
      <DateRangeIcon style={styles.iconStyle}  />
      <DatePicker
        hintText="设置到期日"
        container="inline"
        style={styles.textField}
        dialogContainerStyle={styles.datePickerContainer}
      />
    </DetailList>
    <DetailList>
      <AlarmIcon style={styles.iconStyle} />
      <TextField
        style={styles.textField}
        disabled={true}
        hintText="提醒我"
      />
    </DetailList>
    <DetailList>
      <AddIcon style={styles.iconStyle} />
      <TextField
        style={styles.textField}
        hintText="添加子任务"
      />
    </DetailList>
    <DetailList>
      <CreateIcon style={styles.iconStyle} />
      <TextField
        style={styles.textField}
        hintText="添加备注"
      />
    </DetailList>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  currentTodo: () => ({
    curListIndex: state.active.curListIndex,
    curTodoIndex: state.active.curTodoIndex
  })
});

// const mapDispatchToProps = ({
//   onHandleDeadDate: ,
//   onHandleRemindDate: ,
//   onHandleAddSubTodo: ,
//   onHandleNote: ,
// });

export default connect()(DetailSetting)
