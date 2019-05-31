import React from 'react';

const Character = (props) => {

    const {name, gender, height, hair} = props;

    return(
        <div>
            <h1>{ name }</h1>
            <p>{ gender }</p>
            <p>{ height }</p>
            <p>{ hair }</p>
        </div>
    ); 
}

export default Character;