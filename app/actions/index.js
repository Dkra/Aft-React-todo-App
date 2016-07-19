export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    data: text
  }
}
