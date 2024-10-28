import data from "@/app/components/productlist/product";
import productsData from "@/app/components/productlist/product";

export function filterProducts(products,filterParams)
{
    let filterData = products;
    if(filterParams.filter ){
        filterData = filterData.filter(product=>product.name.includes(filterParams.filter));
        console.log('Filter with text ',filterData);
    }
    if(filterParams.showOnlyInStock)
    {
        filterData = filterData.filter(product=>product.stocked == filterParams.showOnlyInStock);
    }
    return filterData;
}
export default function groupProductByCategory(products)
{
    let group = {
    };
    for(const product of products)
    {
        if(!group[ product.category] )
        {
            group[ product.category] = [product];
        }
        else
        {
            group[ product.category].push(product);
        }
    }
    return group;
}