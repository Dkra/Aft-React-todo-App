import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import style from './components/style.sass'
import TodoList from './components/todoList'

// import { StyleRoot } from 'radium'
// import SweetAlert from 'react-bootstrap-sweetalert'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      todos: [],
      filter: 'All'
    }
  }

  _handleInputChange (e) {
    if (!e.target.value) return
    this.setState({value: e.target.value.substr(0, 20)})
  }

  _handleSubmit (e) {
    console.log(e)
    e.preventDefault()
    console.log('submitting')
  }

  _addTodo () {
    if ( !this._mainInput.value ) return

    this.setState({
      value: '', // clear input value
      todos: [
        ...this.state.todos,
        {
          text: this.state.value,
          isComplete: false,
          visibilityFilter: 'Todo'
        }
      ]
    })

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

  // https://facebook.github.io/react/docs/component-specs.html
  // Mounting
  componentWillMount() {
    // alert('before add new todo!')
  }

  componentDidMount() {
    this._mainInput.focus()
  }

  // Updating
  shouldComponentUpdate() {
    return true
  }

  componentWillReceiveProps() {

  }

  componentWillUpdate() {

  }

  componentDidUpdate() {

  }

  // Unmounting
  componentWillUnmount() {

  }

  render() {
    return (
      <form onSubmit={ (e) => this._handleSubmit(e) }>
        <h1>My Todo App [ React ]</h1>

        <div className="tool-list">

          <input type="text" className="todoText" value={ this.state.value } onChange={ (e) => this._handleInputChange(e) } ref={ (el) => this._mainInput = el }></input>

          <button className="btn btn-default" onClick={ this._addTodo.bind(this) }> Add </button>
          <button className="btn btn-default" onClick={ this._removeAll.bind(this) }> Remove All</button>

          <a className={this.state.filter === 'All' ? 'active filter-option' : 'filter-option'} onClick={ () => this.setState({filter: 'All'}) } >All</a>
          <a className={this.state.filter === 'Todo' ? 'active filter-option' : 'filter-option'} onClick={ () => this.setState({filter: 'Todo'}) } >Todo</a>
          <a className={this.state.filter === 'Done' ? 'active filter-option' : 'filter-option'} onClick={ () => this.setState({filter: 'Done'}) } >Done</a>

        </div>

        <TodoList todos={ this.state.todos } filter={ this.state.filter } toggleTodoFn={ this._toggleTodo.bind(this) } removeTodoFn={ this._removeSpecificTodo.bind(this) }/>
      </form>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.fluid-container'))
