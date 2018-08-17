import React from 'react';


const ToDo = props => (
    <div>
        <h3>These are my todos</h3>
        {props.todos.map((todo, index) => {
            return <p key={index}>{todo}</p>
        })}
    </div>
);

export default ToDo;