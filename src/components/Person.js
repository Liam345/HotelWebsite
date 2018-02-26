import React from 'react';
import img from '../images/VSY/VSY-1-min.png';

//img
//name
//title
//details

const Person = (props) => (
    <div style={{margin:100, display:'flex'}}>
        
        <img style={{height:150, width:150, marginRight:50}} src={props.image} alt="Person"/>
        <div>
            <h3>{props.name}</h3>
            <h4>{props.title}</h4>
            <p>
            {props.details}
            </p>
        </div>
    </div>
);

export default Person;