import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const handleCartBtnClick = (clickedItem) =>{
        setCart(clickedItem)
    }
    useEffect(()=>{
        fetch('dogdata.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    
    return (
        <div className='shop-container'>
            <h1>Aniks Dog Hunt Store</h1>

            <div className='product-container'>
                {
                    products.map(p=><Product
                    key = {p.id}
                    product = {p}
                    handleClick = {handleCartBtnClick}
                    ></Product> )

                }
            </div>
            <div className='cart-container'></div>
            
            
        </div>
    );
};

export default Shop;