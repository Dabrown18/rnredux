const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch(action.type) {
    case SET_FILTER:
      return action.filter
    
    case CLEAR_FILTER:
      return false

    default:
      return state
  }
}

export default visibilityFilter;