import ProductCategory from "@/app/components/productlist/ProductCategory";

export default function ProductTable({categories}) {
    console.log('Property Categories ',categories);
    return(<div>
        <div className={"row"}>
            <div className={"col-sm-6"}>
                Name
            </div>
            <div className={"col-sm-6"}>
                Price
            </div>
        </div>
        {
            categories.map((category,index) =>
                <ProductCategory key={index}
                                 products={category[1]}/>)
        }

    </div>);
}