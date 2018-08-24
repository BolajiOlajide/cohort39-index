import React, { Component } from 'react';
import { connect } from 'react-redux';

// components
import Input from './Input.component.jsx';
import ToDo from './ToDo.component.jsx';
import Button from './Button.component.jsx';

// actions
import { getAllTodos, addTodo } from '../actions/todo.action';


class Home extends Component {
    constructor() {
        super();
        this.state = {
            todo: '',
            todos: [],
            displayingTodos: [],
            offset: 0,
            disabled: false
        }
        this.addTodo = this.addTodo.bind(this);
    }

    async componentDidMount() {
        await this.props.getAllTodos();
    }

    componentWillReceiveProps(nextProps) {
        const { todos } = nextProps;
        const { offset } = this.state;
        this.setState({ todos, displayingTodos: [todos[offset]]  });
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    loadmore = () => {
        const { displayingTodos, offset, todos } = this.state;
        const newOffset = offset + 1;
        console.log(newOffset, todos.length, 'loladl');
        if (newOffset < todos.length) {
            this.setState({
                displayingTodos: [
                    todos[newOffset],
                    ...displayingTodos
                ],
                offset: newOffset
            });
            return false;
        }
        this.setState({
            disabled: true
        });
        return false;
    }

    async addTodo() {
        const { todo } = this.state;
        await this.props.addTodo(todo);
    }

    render() {
        return (
            <div>
                <Input name="todo" value={this.state.todo} onChange={this.onChange} />
                <Button onClick={this.addTodo} label="Add ToDo" />
                {
                    this.props.todos ? <ToDo todos={this.state.displayingTodos} /> : <p>Loading....</p>
                }
                <button onClick={this.loadmore} disabled={this.state.disabled}>Load More</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllTodos: () => dispatch(getAllTodos()),
        addTodo: (todo) => {
            return dispatch(addTodo(todo))
        }
    };
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
