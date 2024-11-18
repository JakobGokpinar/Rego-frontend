import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap"
import { publishProduct } from './api/publishProduct.js'
import { fetchLocationData } from './api/fetchLocation.js'

import SpecialPropertyInput from "./SpecialPropertyInput.js"
import CategoryPicker from "./CategoryPicker.js"
import ProductImageForm from "./ProductImageForm.jsx"

export default function LeftSide({ 
        images, addToImages, deleteImage, updateImages,
        specialProperties, addToProperties, removeFromProperties,
        postNum, changePostNum
}) {

        const [postLocation, setPostLocation] = useState('')


        return(
                <div>

                        <SpecialPropertyInput 
                                properties={specialProperties}
                                addToProperties={addToProperties}
                                removeFromProperties={removeFromProperties}
                        />

                        <ProductImageForm
                                images={images}
                                addToImages={addToImages}
                                deleteImage={deleteImage}
                                updateImages={updateImages}
                        />

                        <Button variant="dark" className="w-100" onClick={publishProduct}>Publish</Button>
                </div>
        )
}