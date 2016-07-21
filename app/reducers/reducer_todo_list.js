import { ADD_TODO, REMOVE_ALL_TODO, REMOVE_SPECIFIC_TODO, TOGGLE_TODO_STATUS } from '../actions/'

export default function(state = [], action) {
  const idx = action.idx
  switch (action.type) {
    case ADD_TODO:
      return [...state,
        {
          text: action.data,
          isComplete: false,
          visibilityFilter: 'Todo'
        }
      ]

    case REMOVE_ALL_TODO:
      return []

    case REMOVE_SPECIFIC_TODO:
      return [ ...state.slice(0, idx).concat(...state.slice(idx+1)) ]

    case TOGGLE_TODO_STATUS:
      let nextState = [ ...state ]
      nextState[idx].isComplete = !nextState[idx].isComplete
      nextState[idx].visibilityFilter = nextState[idx].isComplete ? 'Done' : 'Todo'
      return nextState
  }
  return state
}
