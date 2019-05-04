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
    const { id, title } = this.props.todoItem;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}
          {title}
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
    todoItem: PropTypes.object.isRequired
}

export default TodoItem
