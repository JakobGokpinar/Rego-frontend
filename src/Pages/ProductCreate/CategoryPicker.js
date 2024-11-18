import React from 'react';
import { Form } from "react-bootstrap"

import categoryData from "../../categories.json"

function SubCategoryHandler({ array, subCategory, handleChange }) {
        function formChange(e) {
                handleChange(e.target.value)
        }
        return(
                <Form.Select  className="mb-3" onChange={formChange}>
                        <option value={subCategory}>Subkategori</option>
                        {array.map((item,index) => {
                                return(
                                        <option value={item} key={index}>{item}</option>
                                )
                        })}
                </Form.Select>
        )
}

export default function CategoryHandler({ mainCat, subCat, subArr, hndlCatChange, subCatChange }) {
        return (
                <>
                <Form.Select 
                        value={JSON.stringify(mainCat)} 
                        onChange={(e) => hndlCatChange(e.target.value)} 
                        className="mb-3">

                        <option value={JSON.stringify('')}>
                                Hovedkategori
                        </option>
                        {categoryData.categories.map((item,index) => {
                                return(
                                        <option value={JSON.stringify(item)} key={index}>{item.maincategory}</option>
                                )
                        })}
                </Form.Select>
                {mainCat && <SubCategoryHandler 
                        array={subArr} 
                        subCategory={subCat}
                        handleChange={subCatChange}
                        />}
                </>
        )
}