import React, { Component } from 'react';
import Todos from './components/Todos';

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Take out the trash',
                completed: true
            },
            {
                id: 2,
                title: 'Do app',
                completed: false
            },
            {
                id: 3,
                title: 'Do frontend',
                completed: false
            }
        ]
    }

    markComplete = (id) => {
        console.log(id)
    }
    render() {
        return (
            <div className="App">
                <h1>Todo List</h1>
                <Todos todos={this.state.todos}  markComplete={this.markComplete} />
            </div>
        )
    }
}

export default App