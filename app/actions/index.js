export const ADD_TODO = 'ADD_TODO'
export function addTodo(text) {
  return {
    type: ADD_TODO,
    data: text
  }
}

export const REMOVE_ALL_TODO = 'REMOVE_ALL_TODO'
export function removeAllTodo() {
  return {
    type: REMOVE_ALL_TODO
  }
}

export const REMOVE_SPECIFIC_TODO = 'REMOVE_SPECIFIC_TODO'
export function removeSpecificTodo (idx) {
  return {
    type: REMOVE_SPECIFIC_TODO,
    idx
  }
}

export const TOGGLE_TODO_STATUS = 'TOGGLE_TODO_STATUS'
export function toggleTodoStatus (idx) {
  return {
    type: TOGGLE_TODO_STATUS,
    idx
  }
}

export const CHANGE_VISIBILITY_FITLER = 'CHANGE_VISIBILITY_FITLER'
export function changeVisibilityFilter (filter) {
  return {
    type: CHANGE_VISIBILITY_FITLER,
    filter
  }
}
