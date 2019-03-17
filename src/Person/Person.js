import React from 'react';
import './Person.css';

export default (props) =>
    <div className='Person'>
        <p onClick={props.click}>
            I'm {props.name} and I am {props.age} years old. <span>{props.children}</span>
        </p>
        <input onChange={props.changed} value={props.name}/>
    </div>;
