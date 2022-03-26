import React from 'react';

const Dogitem = (props) => {
    console.log(props)
    const {id,name,image,price} = props.product
    return (
        <div>
            <h1>{name}</h1>
            <h1>{id}</h1>
            <h1>{price}</h1>
            <img src={image} alt="Anik"/>
        </div>
    );
};

export default Dogitem;