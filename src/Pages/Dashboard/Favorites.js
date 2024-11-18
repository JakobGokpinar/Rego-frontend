import "./Favorites.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Favorites = () => {

    const [favoritesArray, setFavoritesArray] = useState()

    useEffect(() => {
        axios.get('/favorites/get').then(response => {
            const productArray = response.data.productArray;
            if(productArray) {
                setFavoritesArray(productArray)
                return;
            }
           console.log(response.data.message);
        }).catch(error => {
            console.log("error happened while fetching Favorites", error)
        })
    }, [])
    
        return(
            <div className="favorites-container">
                <Breadcrumb>
                    <Breadcrumb.Item href='/min-konto'>Min konto</Breadcrumb.Item>
                    <Breadcrumb.Item href='/profil' active>Favoritter</Breadcrumb.Item>
                </Breadcrumb>
                <div className="favorites-content">
                {(favoritesArray && favoritesArray.length > 0) ? favoritesArray.map(product => {
                            return(
                                <div className="favorites-product" key={product.title}>
                                        <ProductCard
                                            product={product}
                                        ></ProductCard>
                                </div>
                            )
                        }) : <p>Du har ingen favoritte annonser</p>}
                </div>
            </div>
        )
    
}

export default Favorites;