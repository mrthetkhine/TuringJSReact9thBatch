import {Component, useState} from "react";

export default function FormDemo(props) {
    const [price,setPrice] = useState(0);
    const [qty,setQty] = useState(0);


    const priceOnChange = (event)=>{
        setPrice(event.target.value);
    };
    const qtyOnChange = (event)=>{
        setQty(event.target.value);
    }
    console.log('Render');
    return(<div>
        <form>
            <div className={"form-group"}>
                <label htmlFor="price">Price</label>
                <input type={"text"}
                       id="price"
                       className={"form-control"}
                        value={price}
                        onChange={priceOnChange}/>
            </div>
            <div className={"form-group"}>
                <label htmlFor="qty">Qty</label>
                <input type={"text"} id="qty"
                       className={"form-control"}
                        value={qty}
                       onChange={qtyOnChange}/>
            </div>
            <div className={"form-group"}>
                <label htmlFor="total">Total &nbsp;</label>
                {price* qty}
            </div>
        </form>
    </div>)
}