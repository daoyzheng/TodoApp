import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux';
import store from './store';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import TodoDetails from './components/TodoDetails';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <div className="container">
                            <Header />
                            <Route exact path="/" render={props => (
                                <React.Fragment>
                                    <AddTodo />
                                    <Todos />
                                </React.Fragment>
                            )} />
                            <Route path="/todoDetails" component={TodoDetails} />
                        </div>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App