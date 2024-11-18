import { Form } from "react-bootstrap"
import categoryData from "../../../categories.json"

export default function CategorySelection ({ 
        selectedCategory, 
        subCategories,
        selectedSubCategory,
        onCategoryChange,
        onSubCategoryChange }) {
        return (
                <div>
                    <Form.Select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
                                <option value="">Hovedkategori</option>
                                {categoryData.categories.map((item,index) => (
                                        <option key={index} value={item.maincategory}>{item.maincategory}</option>
                                ))}
                    </Form.Select>

                        {/*{selectedCategory && <SubCategorySelect 
                        />}*/}
                </div>
        )
}

function SubCategorySelect ({ subCategories, selectedSubCategory, onSubCategoryChange }) {
        function handleSubCategoryChange (e) {
            onSubCategoryChange(e.target.value)
        }
}

