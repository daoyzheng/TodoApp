import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getTodos} from '../actions/todos.js'

export class Todos extends Component {
  // When component mounts, make a request to django api 
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    return (
      <div>
        <table className="table table-striped">
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
                <tr key={todo.id}>
                  <td>{todo.text}</td>
                  <td>{todo.dueDate}</td>
                  <td>{todo.status}</td>
                  <td><button className="btn btn-sm">View</button> | <button className="btn btn-danger btn-sm">Delete</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

// propTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

// Map state from reducer to the prop of this component
const mapStateToProps = state => ({
  todos: state.todosReducer.todos
});

export default connect(mapStateToProps, {getTodos})(Todos)
