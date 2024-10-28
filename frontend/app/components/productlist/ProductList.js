import FilterProductTable from "@/app/components/productlist/FilterProductTable";
import ProductTable from "@/app/components/productlist/ProductTable";
import productsData from './product';
import groupProductByCategory, {filterProducts} from "@/app/components/productlist/product-util";
import {useState} from "react";
export default function ProductList()
{
    const [data,setData] = useState(productsData);

    let group = groupProductByCategory(data);
    console.log('Category group ',group);
    let categories = Object.entries(group);
    console.log('Categories ',categories);

    const updateFilterChange= (filterParams)=>{
        console.log('Filter change',filterParams);
        let filterData = filterProducts(productsData, filterParams);
        setData(filterData);

    }
    return (<div>
        <FilterProductTable updateFilterChange={updateFilterChange}/>

        <ProductTable categories={categories}/>
    </div>);
}