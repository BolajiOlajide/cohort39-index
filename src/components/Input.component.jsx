import React from 'react';


const Input = props => (
    <input type="text" name={props.name} onChange={props.onChange} value={props.value} />
);

export default Input;