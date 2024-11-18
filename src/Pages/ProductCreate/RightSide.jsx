import React from "react";
import { Breadcrumb, Carousel,Button } from "react-bootstrap"
import TextareaAutosize from 'react-textarea-autosize';


export default function RightSide({ mainCat, subCat, images, title, price, desc, properties, postNum }) {
        return (
            <div>
                <Breadcrumb>
                        <Breadcrumb.Item active>Kategori</Breadcrumb.Item>
                            <Breadcrumb.Item>{mainCat}</Breadcrumb.Item>
                            <Breadcrumb.Item>{subCat}</Breadcrumb.Item>
                </Breadcrumb>

                <Carousel>
                        {images.map(file => {
                                return (
                                        <Carousel.Item key={file.name}>
                                                <img src={file.data} alt="product" className="carousel-img"/>
                                        </Carousel.Item>
                                )
                        })}
                </Carousel>
                
                <div style={{height: '20px'}}></div>
                <h5>{title ? title : "Title"}</h5>
                <div style={{height: '20px'}}></div>

                <h5>{price ? price : "Price"}</h5>
                <div style={{height: '20px'}}></div>
                
                <h5>Beskrivelse</h5>
                <TextareaAutosize value={desc} 
                        style={{
                                width: '100%',
                                resize: 'none',
                                borderStyle: 'none'
                        }}                     
                />
                {desc !== '' && <div style={{height: '20px'}}></div> }
                
                <h5>Nokkel Info</h5>

                <div className="property-preview-container">
                        {properties.map((item, index) => {
                                return(
                                        <div key={index} className="property-item ">
                                                <p>{item.key}</p>
                                                <p>{item.value}</p>
                                        </div>
                                )
                        })}
                </div>
                
                <div style={{height: '20px'}}></div>

                <h5>Adresse</h5>
                <p>{postNum}</p>
            </div>
        )
}