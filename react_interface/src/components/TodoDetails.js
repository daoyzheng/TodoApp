import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

export class TodoDetails extends Component {
  state = {
    id: '',
    text: '',
    dueDate: '',
    status: '',
    firstLoad: true
  }

  onChange = (e) => this.setState({ status: e.target.value, firstLoad: false });

  onLoad = (e) => this.setState({ [e.target.name]: e.target.value})

  updateTodo = (e) => {
    e.preventDefault();
    const { text, dueDate, status } = this.state;
    console.log(text, dueDate, status);
  }
  
  componentDidMount() {
    let textEvent = document.getElementById("textDisplay");
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
              onLoad={this.onLoad}
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
              onLoad={this.onLoad}
            />
          </div>

          <div className="form-group">
            <input 
              className="form-control"
              type="date"
              name="dueDate"
              readOnly
              value={this.props.todo.dueDate}
              onLoad={this.onLoad}
            />
          </div>

          <div className="form-group">
            <select
              className="form-control"
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
    todo: PropTypes.object.isRequired
}

// Map state from reducer to the prop of this component
const mapStateToProps = state => ({
  todo: state.todosReducer.todo
});

export default connect(mapStateToProps)(TodoDetails)
