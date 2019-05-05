import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

export class TodoDetails extends Component {
  render() {
    return (
      <div className="card card-body mt-4 mb-4">
        <h3>Todo Details</h3>
        <div className="form-group">
            <p>{this.props.todo.id}</p>
        </div>
        <div className="form-group">
            <p>{this.props.todo.text}</p>
        </div>
        <div className="form-group">
            <p>{this.props.todo.dueDate}</p>
        </div>
        <div className="form-group">
            <p>{this.props.todo.status}</p>
        </div>
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
