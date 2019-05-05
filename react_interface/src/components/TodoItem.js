import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
  getStyle = () => {
      return {
          background: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px #ccc dotted',
          color: this.props.todoItem.completed ? 'green' : 'red'
      }
  }  

  render() {
    // extract from props
    const { id, text, dueDate, state } = this.props.todoItem;
    return (
      <table>
        <thead>
          <tr>
            <th>Todo</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.props.</td>
          </tr>
        </tbody>
      </table>
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}
          {text}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
    todoItem: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 12px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
