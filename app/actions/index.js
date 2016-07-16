export const actionType = 'ADD_TODO'
export default (text) => {
  return {
    type: actionType,
    data: text
  }
}
