import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Searchbar.css';
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

import { instanceAxs } from '../../config/api.js'

export default function Searchbar() {

    const [productObjects, setProductObjects] = useState([])
    const [suggestedCategories, setSuggestedCategories] = useState([]);
    const [searchQuery] = useState('');
    const [isShow, setIsShow] = useState(false);


    const handleLinkClick = () => {
        setIsShow(false)
    }

    useEffect(() => {
        if(searchQuery === '') {
            setIsShow(false)
            return;
        };

        instanceAxs.post('/searchproduct', {q: searchQuery})
        .then(response => {
                var responseData = response.data.productArray.map(item => {
                return {title: item.title, img: item.annonceImages[0], id: item._id}
            })
            const suggestedCat = response.data.categories.slice(0,3);
            responseData = responseData.slice(0,3);

            setProductObjects(responseData)
            setSuggestedCategories(suggestedCat)
            setIsShow(true)
        })        
    }, [searchQuery])

  return (
    <div>
            <Form action='search' className='d-flex'>
                    <Form.Control type='search' name='q'  placeholder='Søk produkt' autoComplete='off'/>
                    <Button type='submit' variant='outline-dark'>Søk</Button>
            </Form>
            {isShow && suggestionBox(searchQuery, 
                handleLinkClick, 
                productObjects, 
                suggestedCategories)
            }
    </div>
  )
}

const suggestionBox = ( searchQuery, handleLinkClick, productObjects, suggestedCategories) => {
    return(
        <div id="suggestionBox" className='search-suggestion-box border'>    

        <div id='searchWord' className='mb-4'>
            <p className='suggestion-component__title mb-1'>Søk</p>
            <Link to={`/search?q=${searchQuery}`} onClick={handleLinkClick}>
                Finn flere resultater for '{searchQuery}'
            </Link>
        </div>

        {productObjects.length > 0 &&       
                <div id='searchProduct' className='suggestion-component'>
                        <p className='suggestion-component__title'>Produkter</p>
                        {productObjects.map((item, index) => {
                            return(
                                <Link to={`/produkt/${item.id}`} key={index} onClick={handleLinkClick}>
                                    <div className='suggestion-component__content' key={item.title}>
                                        <p style={{margin: 0}}>{item.title}</p>
                                        <img className='suggestion-component__img' src={item.img.location} alt="annonce"/>
                                    </div>
                                </Link>
                            )
                        })}
                </div>
        }

        {suggestedCategories.length > 0 &&       
                <div id='searchProduct' className='suggestion-component'>
                        <p className='suggestion-component__title'>Kategorier</p>
                        {suggestedCategories.filter(item => item !== null && item !== undefined).map((item, index) => {
                            return(
                                <Link to={`search?category=${item}`} key={index} onClick={handleLinkClick}>
                                    <div className='category-suggestion-component__content'>
                                        {item}
                                    </div>
                                </Link>
                            )
                        })}
                </div>
        }        
    </div> 
    )
  }