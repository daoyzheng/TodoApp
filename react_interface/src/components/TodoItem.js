import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
  render() {
    return (
      <div>
          <p>{this.props.todoItem.title}</p>
      </div>
    )
  }
}

TodoItem.propTypes = {
    todoItem: PropTypes.object.isRequired
}

export default TodoItem
