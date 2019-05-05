import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {addTodos} from '../actions/todos'


export class AddTodo extends Component {
  state = {
    text: '',
    dueDate: '',
    status: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { text, dueDate, status } = this.state;
    console.log(text, dueDate, status);
    const todo = {text, dueDate, status};
    this.props.addTodos(todo);
    // Reset back to empty fields
    this.setState({
      text: '',
      dueDate: '',
      status: ''
    });
  }

  render() {
    const {text, dueDate, status} = this.state
    return (
      <div className="card card-body mt-4 mb-4">
        <h3>Add a new todo</h3>
        <form onSubmit={this.onSubmit} className="form-group">
          <div className="form-group">
            <input 
              className="form-control"
              type="text" 
              name="text" 
              placeholder="Add Todo ..." 
              value={text}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <input 
              className="form-control"
              type="date"
              name="dueDate"
              value={dueDate}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <select
              className="form-control"
              value={status}
              name="status"
              onChange={this.onChange}
            >
              <option value="" disabled hidden>Todo Status</option>
              <option value="TODO">TODO</option>
              <option value="IN-PROGRESS">IN-PROGRESS</option>
              <option value="DONE">DONE</option>
            </select>
          </div>

          <div className="form-group">
            <button 
              className="btn btn-primary"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

// propTypes
AddTodo.propTypes = {
    addTodos: PropTypes.func.isRequired
}

export default connect(null, {addTodos})(AddTodo)
