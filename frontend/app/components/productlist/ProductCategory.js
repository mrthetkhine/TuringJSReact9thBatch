import './Product.css';
import classNames from "classnames";

function ProductRow({product}) {
    console.log('ProductRow ',product);
    const stockClass = classNames({
        'col-sm-6': true,
        'stock': product.stocked,
    });
    return <div className="row">
        <div className={stockClass}>{product.name}</div>
        <div className="col-sm-6"> {product.price}</div>
    </div>;
}

export default function ProductCategory({products}) {
    console.log('products ',products);
    return <div>
        <div className="row">
            <h3 className={"product-header"}>{products[0].category}</h3>
        </div>
        {
            products.map((product,index)=><ProductRow product={product} key={index}/>)
        }
    </div>
}