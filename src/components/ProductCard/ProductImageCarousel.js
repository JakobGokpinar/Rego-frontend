import React from 'react';
import { Link } from "react-router-dom";
import { Carousel,Image } from 'react-bootstrap'

export default function ProductImageCarousel({ images, id, isHover, onHover, offHover }) {
        return(
            <Carousel interval={1000} controls={isHover ? true : false} onMouseEnter={onHover} onMouseLeave={offHover}>
                  {images.map((img, index) => {
                      return(
                          <Carousel.Item key={index}>
                              <Link to={`/produkt/${id}`}>
                                    <Image
                                        fluid
                                        className="carousel-img"
                                        src={img}
                                        alt="product-image"
                                    />
                              </Link>
                          </Carousel.Item>
                      )
                  })}
            </Carousel>     
        )
}