import React, { useState, useContext, useEffect } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';


const allProducts =[{name:"Lenevo", category:"laptop"},{name:"HP", category:"laptop"},{name:"Asus", category:"laptop"},
{name:"Samsung", category:"mobile"},{name:"Nokia", category:"mobile"},{name:"Apple", category:"mobile"},{name:"Canon", category:"camera"},{name:"Nikkon", category:"camera"},{name:"Sonny", category:"camera"}]
const Categories = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        console.log({category});
        const matchProducts = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProducts(matchProducts); 
    }, [category])
    return (
        <div>
            <h2>Select your  category: {category}</h2>
            {
                products.map(pd => <CategoryDetail product={pd}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;