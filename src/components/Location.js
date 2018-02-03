import React from 'react';

const handleClick = () => {
    console.log("User CLicked");
};

const Location = (props) => (
<div style={{marginBottom:50 , marginLeft:100}}>
    <img style={{height:300, width:300}} src={props.image} alt="Logo" />
    <div>
        Ozihouse <br/>
        {props.name} <br/>
        {props.address} <br/>
    </div>
</div>
);

export default Location;