import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <div className="container">
                        <Header />
                        <AddTodo />
                        <Todos />
                    </div>
                </div>
            </Provider>
        )
    }
}

export default App