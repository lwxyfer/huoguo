import { v4 } from 'node-uuid';

const indexV4 = () => v4();
const nextTodoId = () => v4();

// 每加一层就需要加一个索引
export const addTodo = (text, index) => ({
  type: 'ADD_TODO',
  id: nextTodoId(),
  index: index || indexV4(), // 可以放到reducer ，但是不保存数据，作为额外的参数使用
  text,
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});

export const triggerClock = id => ({
  type: 'TRIGGER_CLOCK',
  id,
});

export const toggleLove = id => ({
  type: 'TOGGLE_LOVE',
  id,
});

// for LISTS
export const addList = title => ({
  type: 'ADD_LIST',
  index: indexV4(),
  title,
});

export const setListIndex = index => ({
  type: 'SET_SELECTED_LIST',
  index,
});

export const setPage = page => ({
  type: 'SET_PAGE',
  page,
});
