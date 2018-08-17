import React, { Component } from 'react';

// components
import Input from './Input.component.jsx';
import ToDo from './ToDo.component.jsx';
import Button from './Button.component.jsx';


class Home extends Component {
    constructor() {
        super();
        this.state = {
            todo: '',
            todos: [
                'Brush my teeth',
                'Wash my clothes',
                'Go to work'
            ]
        }
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    addTodo = () => {
        const { todos, todo } = this.state;
        this.setState({
            todos: [todo, ...todos],
            todo: ''
        });
    }

    render() {
        return (
            <div>
                <Input name="todo" value={this.state.todo} onChange={this.onChange} />
                <Button onClick={this.addTodo} label="Add ToDo" />
                <ToDo todos={this.state.todos} />
            </div>
        )
    }
}

export default Home;
