import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const handleCartBtnClick = (clickedItem) =>{
        const addCart = [...cart,clickedItem]
        setCart(addCart)
        console.log(addCart)
    }
    useEffect(()=>{
        fetch('dogdata.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    let itemItem =''
    for(let cartItem of cart){
        itemItem+=' '+cartItem.name 
    }

    
    
    return (
        <div>
            <h1>Aniks Dog Hunt Store</h1>
            <div className='shop-container'>
            
            <div className='product-container'>
                {
                    products.map(p=><Product
                    key = {p.id}
                    product = {p}
                    handleClick = {handleCartBtnClick}
                    ></Product> )

                }
            </div>
            <div className='cart-container'>
                <h4>Selected Item:</h4>
                <p>Selected: {cart.length} items</p>
                <p>Name: {itemItem}</p>

            </div>
            
            
        </div>
        </div>

    );
};

export default Shop;