import React, { Component } from 'react'
import Todo from './todo'

const TodoList = (props) => {

    // Filter: All , with empty todo
    if( props.filter === 'All' && props.todos.length === 0 ) return <p>Add your first todo!</p>

    // Filter: Done , with empty done todo
    if( props.filter === 'Done') {
      var todosLength = props.todos.filter((todo) => {
        return todo.visibilityFilter === 'Done'
      }).length

      if( !todosLength ) return <p>no any done todos currently!</p>
    }

    // Filter: Todo , with no todo
    if( props.filter === 'Todo') {
      var todosLength = props.todos.filter((todo) => {
        return todo.visibilityFilter === 'Todo'
      }).length

      if( !todosLength ) return <p>no any Todos currently!</p>
    }

    const Todos = props.todos.map((todo, index) => {
      return <Todo todo={todo} key={index} idx={index} toggleTodo={ props.toggleTodoFn } currentFilter={props.filter} removeTodo={props.removeTodoFn} />
    })

    return (
      <div>
        {Todos}
      </div>
    )
}

export default TodoList
