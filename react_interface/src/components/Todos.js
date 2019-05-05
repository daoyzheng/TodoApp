import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getTodos, deleteTodos} from '../actions/todos'

export class Todos extends Component {
  // When component mounts, make a request to django api 
  componentDidMount() {
    this.props.getTodos();
  }

  todoStyle = (todo) => {
    let currDate = new Date();
    // Convert string date to Date object
    let dueDate = new Date(todo.dueDate);
    console.log(currDate);
    console.log(dueDate);
    if(todo.status === "DONE") { 
      return {
        color: 'green'
      }
    } else {
      if(currDate.getTime() > dueDate.getTime())
      return {
        color: 'red'
      }
    }
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
                  <td style={this.todoStyle(todo)}>{todo.text}</td>
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
