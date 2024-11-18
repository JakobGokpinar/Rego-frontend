import data from "../categories.json"

export default function categoriesToArray () {
        let categoryArray = [
            {
                "mainCat": '',
                "subCategories": []
            }
        ];

        data.categories.map((category) => {
                categoryArray.push({ 'mainCat': '', 'subCategories': category.subcategories})
        })
}