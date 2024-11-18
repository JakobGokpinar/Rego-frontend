import axios from "axios"

export async function publishProduct (formData) {
    try {         
        for (const [key, value] of formData.entries()) { console.log(key,value) }
        const response = await axios.post('/file/product/new', formData, { headers: { 'Content-Type' : 'multipart/form-data'}})
        return response
    } catch (error) { console.error(error) }
}

/*let formData = new FormData()
formData = await imageToFormData(images)
formData.append('title', title)
formData.append('price', price)    
formData.append('description', desc)
formData.append('category', mainCat.maincategory)
formData.append('subCategory', subCat) 
formData.append('specialProperties', JSON.stringify(specialProperties))   
formData.append('postNum', postNum)  */    