import React from 'react';

const Product = (props) => {

    const {id,name,image,price} = props.product
    return (
        <div>
            <img src={image} alt="Anik"/>
            <p>{name}</p>
            <p>{id}</p>
            <p>{price}</p>
        </div>
    );
};

export default Product;