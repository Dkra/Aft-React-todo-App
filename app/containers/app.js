import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TodoList from '../components/todoList'
import '../components/style.sass'
import * as ActionCreators from '../actions/index'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      filter: 'All'
    }
  }
  _handleInputChange (e) {
    this.setState({value: e.target.value.substr(0, 20)})
  }

  _handleSubmit (e) {
    e.preventDefault()
  }

  _addTodo () {
    if ( !this._mainInput.value ) return
    // this.props.dispatch(addTodo(this._mainInput.value))
    this.props.addTodo(this._mainInput.value)
    this.setState({
      value: ''
    })
    // this.setState({
    //   value: '', // clear input value
    //   todos: [
    //     ...this.state.todos,
    //     {
    //       text: this.state.value,
    //       isComplete: false,
    //       visibilityFilter: 'Todo'
    //     }
    //   ]
    // })

    this._mainInput.focus()
  }

  _removeAll () {
    this.props.removeAllTodo()
  }

  _removeSpecificTodo (index) {
    this.props.removeSpecificTodo(index)

    // const todos = [ ...this.state.todos ]
    // todos.splice(index, 1)
    // this.setState({todos})
  }

  _toggleTodo(index) {
    this.props.toggleTodoStatus(index)
    // let Todos = [ ...this.state.todos ]
    // Todos[index].isComplete = !Todos[index].isComplete
    // Todos[index].visibilityFilter = Todos[index].isComplete ? 'Done' : 'Todo'
    //
    // this.setState({
    //   todos: Todos
    // })
  }
  // componentWillUpdate(nextProps, nextState) {
  //   console.log(this.props);
  //   console.log('nextProps', nextProps);
  //   // console.log('--------Render--------');
  // }

  render() {
    console.log(this.props);
    return (
      <form onSubmit={ (e) => this._handleSubmit(e) }>
        <h1><i>My Todo App [ React & Redux ]</i></h1>

        <div className="tool-list">

          <input type="text" className="todoText" value={ this.state.value } onChange={ (e) => this._handleInputChange(e) } ref={ (el) => this._mainInput = el }></input>

          <button className="btn btn-default add-todo" onClick={ this._addTodo.bind(this) }> Add </button>
          <button className="btn btn-default remove-all" onClick={ this._removeAll.bind(this) }> Remove All</button>

          <a className={this.props.filter === 'All' ? 'active filter-option' : 'filter-option'} onClick={ () => this.props.changeVisibilityFilter('All') } >All</a>
          <a className={this.props.filter === 'Todo' ? 'active filter-option' : 'filter-option'} onClick={ () => this.props.changeVisibilityFilter('Todo') } >Todo</a>
          <a className={this.props.filter === 'Done' ? 'active filter-option' : 'filter-option'} onClick={ () => this.props.changeVisibilityFilter('Done') } >Done</a>

        </div>

        <TodoList todos={ this.props.todos } filter={ this.props.filter } toggleTodoFn={ this._toggleTodo.bind(this) } removeTodoFn={ this._removeSpecificTodo.bind(this) }/>
      </form>
    )
  }
}
// will pass redux store's current state into this function
function mapStateToProps({todos, filter}) {
  // return state for react props
  return {
    todos: todos,
    filter: filter
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
