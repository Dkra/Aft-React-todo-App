import { combineReducers } from 'redux'
import todos from './reducer_todo_list'

const rootReducer = combineReducers({
  todos: todos
})

export default rootReducer
