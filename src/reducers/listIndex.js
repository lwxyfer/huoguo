const listIndex = (state = 0, action) => {
  switch (action.type) {
    case 'SET_LIST_INDEX':
      return action.index
    default:
      return state
  }
}

export default listIndex
