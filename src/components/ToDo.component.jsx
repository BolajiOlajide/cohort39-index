import React from 'react';


const ToDo = props => (
    <div>
        <h3>These are my todos</h3>
        {props.todos.map((todo) => {
            return <p key={todo.id}>{todo.todo}</p>
        })}
    </div>
);

export default ToDo;