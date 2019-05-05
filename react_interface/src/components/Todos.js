import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getTodos, deleteTodos} from '../actions/todos'

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
              <th />
            </tr>
          </thead>
          <tbody>
            {
              this.props.todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.text}</td>
                  <td>{todo.dueDate}</td>
                  <td>{todo.status}</td>
                  <td>
                    <button className="btn btn-sm">View</button> | 
                    <button 
                      onClick={this.props.deleteTodos.bind(this, todo.id)} 
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
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
    todos: PropTypes.array.isRequired,
    getTodos: PropTypes.func.isRequired,
    deleteTodos: PropTypes.func.isRequired
}

// Map state from reducer to the prop of this component
const mapStateToProps = state => ({
  todos: state.todosReducer.todos
});

export default connect(mapStateToProps, {getTodos, deleteTodos})(Todos)
