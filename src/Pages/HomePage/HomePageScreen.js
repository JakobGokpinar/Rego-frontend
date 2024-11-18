import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard.js';
import axios from 'axios';

const HomePageScreen = () => {

    const [productArray, setProductArray] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/search');
                console.log(response.data)
                let products = Array.from({ length: 20}, () => response.data.productArray[response.data.productArray.length-1])

                setProductArray(products)
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData()
    }, [])
    
        return(
                <div className='container px-0' style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(18rem, 1fr))', gap: '20px'}}>
                    {productArray.map((product, index) => {
                        return(   
                                <ProductCard
                                    key={index}
                                    product={product}
                                ></ProductCard>
                        )
                    })}
                </div>
        )
    }   


export default HomePageScreen;