import React, { useState } from "react";
import "./css/ProductCreatePage.css";

import Button from 'react-bootstrap/Button';
import { Col, Row } from "react-bootstrap";

import ProductDetailsForm from "./components/ProductDetailsForm.jsx"
import CategorySelection from "./components/CategorySelection.jsx"
import PostnumberManager from "./components/PostnumberManager.jsx"
import LeftSide from "./LeftSide.js";
import RightSide from "./RightSide.jsx"
import ProductImageForm from "./ProductImageForm.jsx";

const NewAnnonce = () => {

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const [mainCat, setMainCat] = useState('')
  const [subCat, setSubCat] = useState('')
  const [subCatArray, setSubCatArray] = useState([])

  const [postNum, setPostNum] = useState('')
  const [postLocation, setPostLocation] = useState('')

  const [specialProperties, setSpecialProperties] = useState([])
  const [images, setImages] = useState([])

  /*const [rerender, setRerender] = useState(false) //dummy state to use force update on imageArray when image description added
  const [imageArray, setImageArray] = useState([]);
  const [specPropArray, setSpecPropArray] = useState([]); 
  const [postAddress, setPostAddress] = useState('Ugyldig postnummer');
  const [postNumber, setPostNumber] = useState('')
  const [annoncePropertyObject, setAnnoncePropertyObject] = useState({
    title: '', price: '100', pricePeriod: 'total', category: '', subCategory: '', description: '', status: '', postnumber: '', location: ''
  })*/

    function updateTitle (val) { setTitle(val) }
    function updatePrice (val) { setPrice(val) }
    function updateDesc (val) { setDescription(val) }

    function handleCategoryChange (value) {
      console.log(value)
      setMainCat(value);
      //setSubCatArray(cat.subcategories)
    }
    function subCatChange(val) { setSubCat(val) }

    function addToImages (object) { setImages(prevState => [...prevState, object]) }// [...imgArr] yazarak yeni bi array referansi olusturuyoruz ve bu sayede React state'i update ediyor. Direk setSelectedImage(imgArr) yapsaydik, React state'i guncellemeyecekti
    function removeFromImages (image) { setImages(images.filter(img => img.data !== image.data)) }  
    function updateImages (array) { setImages(array)}

    function updatePostNumber(val) { setPostNum(val) }
    function updatePostLocation (val) { setPostLocation(val) }

    function addToProperties (key, value) {
      setSpecialProperties([...specialProperties, { key, value}])
    }
    function removeFromProperties (key) {
        setSpecialProperties(specialProperties.filter(item => item.key !== key))  //array.filter returns a new array
    }

    return (
      <div className="container">
            <Row>
                <Col className="left-section p-4" lg={4} md={6} sm={12} xs={12}>
                      <ProductDetailsForm 
                          title={title}
                          price={price}
                          desc={description}
                          updateTitle={updateTitle}
                          updatePrice={updatePrice}
                          updateDesc={updateDesc}
                      />
                      <CategorySelection 
                            selectedCategory={mainCat}
                            selectedSubCategory={subCat}
                            subCategories={subCatArray}
                            onCategoryChange={handleCategoryChange}
                            onSubCategoryChange={subCatChange}
                      />
                      <PostnumberManager 
                            postNumber={postNum}
                            postLocation={postLocation}
                            updatePostNumber={updatePostNumber}
                            updatePostLocation={updatePostLocation}
                      />
                      <ProductImageForm 
                            images={images}
                            addToImages={addToImages}
                            removeFromImages={removeFromImages}
                            updateImages={updateImages}
                      />
                    <LeftSide 

                        images={images}
                        addToImages={addToImages}
                        deleteImage={removeFromImages}
                        updateImages={updateImages}

                        specialProperties={specialProperties}
                        addToProperties={addToProperties}
                        removeFromProperties={removeFromProperties}
                    />
                </Col>

                <Col className="right-section px-5" lg={8} md={6} sm={12} xs={12}>
                            <RightSide 
                                  mainCat={mainCat.maincategory}
                                  subCat={subCat}
                                  images={images}
                                  title={title}
                                  price={price}
                                  desc={description}
                                  properties={specialProperties}
                                  postNum={postNum}
                            />
                </Col>
            </Row>
      </div>
    );
  }


export default NewAnnonce;
