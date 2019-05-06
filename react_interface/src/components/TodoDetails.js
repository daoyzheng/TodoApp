import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {updateTodo} from '../actions/todos'

export class TodoDetails extends Component {
  state = {
    status: '',
    firstLoad: true
  }

  onChange = (e) => this.setState({ status: e.target.value, firstLoad: false });

  updateTodo = (e) => {
    e.preventDefault();
    let id = this.props.todo.id;
    let text = this.props.todo.text;
    let dueDate = this.props.todo.dueDate;
    let status = this.state.status;
    const todo = {id,text,dueDate,status};
    this.props.updateTodo(todo);
  }

  render() {
    const {text, dueDate, status} = this.state
    return (
      <div className="card card-body mt-4 mb-4">
        <h3>Todo Details</h3>
        <form className="form-group">
          <div className="form-group">
            <input 
              className="form-control"
              type="text" 
              name="id" 
              readOnly
              value={this.props.todo.id}
            />

          </div>
          <div className="form-group">
            <input 
              className="form-control"
              id="textDisplay"
              type="text" 
              name="text" 
              readOnly
              value={this.props.todo.text}
            />
          </div>

          <div className="form-group">
            <input 
              className="form-control"
              type="date"
              name="dueDate"
              readOnly
              value={this.props.todo.dueDate}
            />
          </div>

          <div className="form-group">
            <select
              className="form-control"
              defaultValue={this.props.todo.status}
              value={this.state.firstLoad ? this.props.todo.status : this.state.status}
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
              onClick={this.updateTodo}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    )
  }
}

// propTypes
TodoDetails.propTypes = {
    todo: PropTypes.object.isRequired,
    updateTodo: PropTypes.func.isRequired
}

// Map state from reducer to the prop of this component
const mapStateToProps = state => ({
  todo: state.todosReducer.todo
});

export default connect(mapStateToProps, {updateTodo})(TodoDetails)
