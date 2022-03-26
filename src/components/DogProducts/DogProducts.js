import React, { useEffect, useState } from 'react';
import Dogitem from '../DogItem/Dogitem';

const DogProducts = () => {

    const [product, setProduct] = useState([])
    useEffect(()=>{
        fetch('dogdata.json')
        .then(res => res.json())
        .then(data =>setProduct(data))
    },[])


    return (
        <div>
            <h1>Welcome to Aniks Dog Store</h1>
            {
                product.map(p=><Dogitem product={p}></Dogitem>)
            }
        </div>
    );
};

export default DogProducts;