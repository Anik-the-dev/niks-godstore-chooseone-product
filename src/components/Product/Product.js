import React from 'react';
import './Product.css'

const Product = (props) => {

    const {name,image,price} = props.product
    const {handleClick, product} = props
    
    return (
        <div className='singleProduct'>
            <img src={image} alt="Anik"/>
            <h4>Product: {name}</h4>
            <p>Product Price: ${price}</p>
            <button onClick={() => handleClick(product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;