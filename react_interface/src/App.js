import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import axios from 'axios';

class App extends Component {
    state = {
        todos: []
    }

    componentDidMount() {
        axios.get('/api/todos').then(res => this.setState({todos: res.data}));
    }

    // Toggle Complete
    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })});
    }

    // Delete todo
    delTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    }

    // Add todo
    addTodo = (title) => {
        const newTodo = {
            id: 4,
            title: title,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo]})
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header />
                    <AddTodo addTodo={this.addTodo}/>
                    {/* <Todos todos={this.state.todos}  markComplete={this.markComplete} 
                    delTodo={this.delTodo}/> */}
                    <Todos todos={this.state.todos}/>
                </div>
            </div>
        )
    }
}

export default App