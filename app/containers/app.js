import React, { Component } from 'react'
import TodoList from '../components/todoList'
import '../components/style.sass'
import addTodo from '../actions/index'

export default class App extends Component {
  constructor(props) {
    super(props)
    console.log('props', props);
    this.state = {
      value: '',
      todos: [],
      filter: 'All'
    }
  }
  componentWillMount() {
    console.log(this.props);
  }
  _handleInputChange (e) {
    if (!e.target.value) return
    this.setState({value: e.target.value.substr(0, 20)})
  }

  _handleSubmit (e) {
    e.preventDefault()
    console.log('submitting')
  }

  _addTodo () {
    if ( !this._mainInput.value ) return
    this.props.store.dispatch(addTodo(this._mainInput.value))
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
    this.setState({ todos: [] })
  }

  _removeSpecificTodo (index) {
    const todos = [ ...this.state.todos ]
    todos.splice(index, 1)
    this.setState({todos})
  }

  _toggleTodo(index) {
    let Todos = [ ...this.state.todos ]
    Todos[index].isComplete = !Todos[index].isComplete
    Todos[index].visibilityFilter = Todos[index].isComplete ? 'Done' : 'Todo'

    this.setState({
      todos: Todos
    })
  }

  render() {
    return (
      <form onSubmit={ (e) => this._handleSubmit(e) }>
        <h1><i>My Todo App [ React & Redux ]</i></h1>

        <div className="tool-list">

          <input type="text" className="todoText" value={ this.state.value } onChange={ (e) => this._handleInputChange(e) } ref={ (el) => this._mainInput = el }></input>

          <button className="btn btn-default add-todo" onClick={ this._addTodo.bind(this) }> Add </button>
          <button className="btn btn-default remove-all" onClick={ this._removeAll.bind(this) }> Remove All</button>

          <a className={this.state.filter === 'All' ? 'active filter-option' : 'filter-option'} onClick={ () => this.setState({filter: 'All'}) } >All</a>
          <a className={this.state.filter === 'Todo' ? 'active filter-option' : 'filter-option'} onClick={ () => this.setState({filter: 'Todo'}) } >Todo</a>
          <a className={this.state.filter === 'Done' ? 'active filter-option' : 'filter-option'} onClick={ () => this.setState({filter: 'Done'}) } >Done</a>

        </div>

        <TodoList todos={ this.props.store.getState().todos } filter={ this.state.filter } toggleTodoFn={ this._toggleTodo.bind(this) } removeTodoFn={ this._removeSpecificTodo.bind(this) }/>
      </form>
    )
  }
}
