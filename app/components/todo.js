import React, { Component } from 'react'
import { Icon } from 'react-fa'

const Todo = (props) => {

  function toggleTodo (index) {
    props.toggleTodo(index)
  }

  function removeTodo (e, index) {
    e.stopPropagation()
    props.removeTodo(index)
  }

  function isShow () {

    const currentFilter = props.currentFilter
    let showTodo = null

    if( currentFilter === "Done" && props.todo.visibilityFilter !== "Done" ) {
      showTodo = false
    } else if ( currentFilter === "Todo" && props.todo.visibilityFilter === "Done" ) {
      showTodo = false
    } else {
      showTodo = true
    }

    return showTodo
  }

  function classes () {
    let classes = props.todo.isComplete ? 'isComplete' : 'notComplete'

    return `${classes} todoItem`
  }

  return (
    <p
      style={{ display: isShow() ? "block" : "none"}}
      onClick={ (e) => toggleTodo(props.idx)  }
      className={ classes() }> { props.todo.text }
      <span className="todo-tools">
        <Icon name="trash-o" size="lg" onClick={ (e) => removeTodo(e, props.idx) }/>
      </span>
    </p>
  )

}



export default Todo
