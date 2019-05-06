import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

export class TodoDetails extends Component {
  state = {
    text: this.props.todo.text,
    dueDate: this.props.todo.dueDate,
    status: this.props.todo.status
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

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
              name="text" 
              readOnly
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
TodoDetails.propTypes = {
    todo: PropTypes.object.isRequired
}

// Map state from reducer to the prop of this component
const mapStateToProps = state => ({
  todo: state.todosReducer.todo
});

export default connect(mapStateToProps)(TodoDetails)
