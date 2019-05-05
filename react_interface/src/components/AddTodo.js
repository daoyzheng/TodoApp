import React, { Component } from 'react';

export class AddTodo extends Component {
  state = {
    text: '',
    dueDate: '',
    status: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({ title: ''});
  }

  render() {
    const {text, dueDate, status} = this.state
    return (
      <div className="card card-body mt-4 mb-4">
        <form onSubmit={this.onSubmit} className="form-group">
            <input 
              className="form-control"
              type="text" 
              name="text" 
              placeholder="Add Todo ..." 
              value={text}
              onChange={this.onChange}
            />

            <input 
              className="form-control"
              type="date"
              name="dueDate"
              value={dueDate}
              onChange={this.onChange}
            />

            <select
              className="form-control"
              value={status}
              name="status"
              onChange={this.onChange}
            >
              <option value="TODO">TODO</option>
              <option value="IN-PROGRESS">IN-PROGRESS</option>
              <option value="DONE">DONE</option>
            </select>

            <input 
                type="submit" 
                value="Submit" 
                className="btn"
                style={{flex: '1'}}
            />
        </form>
      </div>
    )
  }
}

export default AddTodo
