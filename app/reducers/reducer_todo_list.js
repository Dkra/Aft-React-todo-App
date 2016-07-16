// import actionType from '../actions/index'

export default function(state = [], action) {
  console.log('action:', action);
  switch (action.type) {
    case 'ADD_TODO':
      return [...state,
        {
          text: action.data,
          isComplete: false,
          visibilityFilter: 'Todo'
        }
      ]
  }
  return state
}
