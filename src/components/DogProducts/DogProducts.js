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
            <h1>Aniks Dog Store</h1>
            {
                product.map(p=><Dogitem 
                    key = {p.id}
                    product={p}></Dogitem>)
            }
        </div>
    );
};

export default DogProducts;