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

const list = (state, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return {
        index: action.index,
        title: action.title,
        todos: []
      }
    case 'ADD_TODO':
      if(state.index !== state.listIndex) {
        return state
      }
      return Object.assign({}, state, {todos: todos(state.todos, action)})
    case 'TOGGLE_TODO':
      if(state.index !== state.listIndex) {
        return state
      }
      return Object.assign({}, state, {todos: todos(state.todos, action)})
  }
}

const todolists = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return [
        ...state,
        list(undefined, action)
      ]
    case 'ADD_TODO':
    // action has no index
      return state.map(t =>
        list(t, action)
      )
    case 'TOGGLE_TODO':
      return state.map(t =>
        list(t, action)
      )
    default:
      return state
  }
}
 
export default todolists
