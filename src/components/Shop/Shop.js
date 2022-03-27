import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const handleCartBtnClick = (clickedItem) =>{
        const addCart = [...cart,clickedItem]
        setCart(addCart)
    }
    useEffect(()=>{
        fetch('dogdata.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    // let itemName =''
    // for(let cartItem of cart){
    //     itemName+=' '+cartItem.name ;
        
    // }

    // choose on for me btn click in cart Container.
    const [chooseItem, setChooseItem] = useState([])
    const chooseBtnClick = () =>{
        const choose = cart[Math.floor(Math.random() * cart.length)];
        setChooseItem(choose)
        console.log(chooseItem)
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
                <ul  className='cartList'>
                    {
                        cart.map(c=><li className='cartListItem'><img src={c.image} alt="dog products"/>{c.name}</li>)
                    }
                </ul>
                <div className='cartContainerBtn'>
                <button onClick={chooseBtnClick} className='cartContainerBtn1'>Choose One for me</button>
                <p>{chooseItem.name}</p>
                <button className='cartContainerBtn2'>Choose Again</button>
                </div>

            </div>
            
            
        </div>
        </div>

    );
};

export default Shop;