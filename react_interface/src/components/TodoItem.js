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

  onDropDownChange = (e) => {
    let todoItem = Object.assign({}, this.props.todoItem)
    todoItem.status = e.target.value;
    this.setState({todoItem});
  }

  render() {
    // extract from props
    const { id, text, dueDate, status } = this.props.todoItem;
    return (
      <tr>
        <td>{text}</td>
        <td>{dueDate}</td>
        <td>
          <select 
            value={status}
            onChange={this.onDropDownChange}
          >
            <option value="TODO">TODO</option>  
            <option value="IN-PROGRESS">IN-PROGRESS</option>  
            <option value="DONE">DONE</option>  
          </select>
        </td>
        <td><button>View</button> | <button>Delete</button></td>
      </tr>
      // {/* <div style={this.getStyle()}>
      //   <p>
      //     <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}
      //     {text}
      //     <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
      //   </p>
      // </div> */}
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
