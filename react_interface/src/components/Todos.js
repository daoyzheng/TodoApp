import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

export class Todos extends Component {
  render() {
    return (
      <div>
            {this.props.todos.map((todo) => (
                <TodoItem key={todo.id} todoItem={todo} /> 
            ))}
      </div>
    )
  }
}

// propTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
export default Todos
