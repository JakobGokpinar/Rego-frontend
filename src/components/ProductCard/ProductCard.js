import React, { useState } from "react";
import "./ProductCard.css";

import Card from 'react-bootstrap/Card';

import ProductImageCarousel from './ProductImageCarousel.js'
import ProductInfo from './ProductInfo.js'
import ProductActionButtons from "./ProductActionButtons.js"
import ProductShareModal from "./ProductShareModal.js"

function ProductCard({ product }) {

  const shortDesc = product.description.slice(0, 34);

  const [isHover, setHover] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);

  function onHover () {
    setHover(isHover=> !isHover)
  }

  function offHover () {
    setHover(isHover=> !isHover)
  }

  function openModal () { setDisplayModal(true) }
  function hideModal () { setDisplayModal(false) }


  return(
    <Card className="card">

        <Card.Header style={{padding: 0}}>
            <ProductImageCarousel
                  images={product.images}
                  id={product._id}
                  isHover={isHover}
                  onHover={onHover}
                  offHover={offHover}
              />
        </Card.Header>

      <Card.Body>
              <ProductInfo 
                  title={product.title}
                  location={product.location}
                  price={product.price}
                  desc={shortDesc}
              />                    
            <ProductShareModal 
                displayModal={displayModal}
                onHide={hideModal}
                title={product.title}
                id={product._id}
            />             
      </Card.Body>

      <Card.Footer>
            <ProductActionButtons 
              openModal={openModal}
            />
      </Card.Footer>

    </Card>
  )
}

export default ProductCard;