import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getTodos, deleteTodos, selectTodo} from '../actions/todos'

export class Todos extends Component {
  state = {
    text: '',
    dueDate: '',
    status: ''
  }

  // When component mounts, make a request to django api 
  componentDidMount() {
    this.props.getTodos();
  }

  todoStyle = (todo) => {
    let currDate = new Date();
    // Convert string date to Date object
    let dueDate = new Date(todo.dueDate);
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

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Todo</th>
              <th>Due Date</th>
              <th>Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.todos.map((todo) => (
                <tr key={todo.id}>
                  <td style={this.todoStyle(todo)}>{todo.text}</td>
                  <td>{todo.dueDate}</td>
                  <td>
                    <select
                      className="form-control"
                      value={todo.status}
                      name="status"
                      onChange={this.onChange}
                    >
                      <option value="" disabled hidden>Todo Status</option>
                      <option value="TODO">TODO</option>
                      <option value="IN-PROGRESS">IN-PROGRESS</option>
                      <option value="DONE">DONE</option>
                    </select>
                  </td>
                  <td>{todo.status}</td>
                  <td>
                    <Link to="/todoDetails">
                    <button 
                      onClick={this.props.selectTodo.bind(this, todo.id)}
                      className="btn btn-primary btn-sm"
                    >View
                    </button></Link> |{' '}

                    <button
                      className="btn btn-primary btn-sm" 
                    >Update
                    </button> |{' '}

                    <button 
                      onClick={this.props.deleteTodos.bind(this, todo.id)} 
                      className="btn btn-danger btn-sm"
                    >Delete
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
    deleteTodos: PropTypes.func.isRequired,
    selectTodo: PropTypes.func.isRequired
}

// Map state from reducer to the prop of this component
const mapStateToProps = state => ({
  todos: state.todosReducer.todos
});

export default connect(mapStateToProps, {getTodos, deleteTodos, selectTodo})(Todos)
