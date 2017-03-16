const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
        love: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    case 'TOGGLE_LOVE':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        love: !state.love
      }
    case 'TRIGGER_CLOCK':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        number: (state.number || 0) + 1
      }
    default:
      return state
  }
}

const todos = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    case 'TOGGLE_LOVE': 
      return state.map(t =>
        todo(t, action)
      )
    case 'TRIGGER_CLOCK':
      console.log('subscribe' + action.id)
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

const list = (state, action, index) => {
  switch (action.type) {
    case 'ADD_LIST':
      return {
        index: action.index,
        title: action.title,
        todos: []
      }
    case 'ADD_TODO':
      if(state.index !== index) {
        return state
      }
      return Object.assign({}, state, {todos: todos(state.todos, action)})
    case 'TOGGLE_TODO':
      if(state.index !== index) {
        return state
      }
      return Object.assign({}, state, {todos: todos(state.todos, action)})
  }
}

const lists = (state, action, index) => {
  switch(action.type) {
    case 'ADD_LIST':
      return {
        lists: [
          ...state,
          list(undefined, action)
        ]
      }
    case 'ADD_TODO':
      return {
        lists: state.map(t =>
          list(t, action, index)
        )
      }
    case 'TOGGLE_TODO':
      return {
        lists: state.map(t =>
          list(t, action, index)
        )
      }
    default:
      return state
  }
}

//TODO: if data level is too deep, how to set dafault value?
const defaultState = {
  selectIndex: 0,
  page: 'list', 
  visibilityFilter: 'SHOW_ALL',
  lists: []
}


const data = (state = defaultState, action) => {
  const oass = (obj) => (
    Object.assign({}, state, obj)
  )
  switch (action.type) {
    case 'SET_SELECTED_LIST':
      let selectIndex = action.index;
      return oass({selectIndex})
    case 'SET_PAGE':
      let page = action.page;
      return oass({page})
    case 'SET_VISIBILITY_FILTER':
      let visibilityFilter = action.visibilityFilter
      return oass({visibilityFilter})
    case 'ADD_LIST':
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
      return oass(lists(state.lists, action, state.selectIndex))
    default:
      return state
  }
}

export default data
