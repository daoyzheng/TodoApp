import React, { Component } from 'react'

export class Todos extends Component {
  render() {
    return (
      <div>
            <h1>My Todos</h1>
            {this.props.todos.map((todo) => (
                <p>{todo.title}</p>    
            ))}
      </div>
    );
  }
}

export default Todos
