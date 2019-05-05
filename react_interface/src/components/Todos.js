import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

export class Todos extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Todo</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.todos.map((todo) => (
                <TodoItem key={todo.id} todoItem={todo}/>
              ))
            }
          </tbody>
        </table>
            {/* <TodoItem key={todo.id} todoItem={todo}
              markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>  */}
      </div>
    )
  }
}

// propTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
export default Todos
