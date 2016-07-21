import { combineReducers } from 'redux'
import todos from './reducer_todo_list'
import visibilityFilter from './visibility_filter'

console.log(visibilityFilter);
const rootReducer = combineReducers({
  todos,
  filter: visibilityFilter
})

export default rootReducer
