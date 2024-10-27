import {Component, useState} from "react";

export default function FormDemoTwo(props) {
    const [state,setState] = useState({
        price: 0,
        qty: 0,
    });

    const onChangeHandler = (event)=>{
        //console.log('Name ',event.target.name);
        let name = event.target.name;
        setState({
            ...state,
           [name]: event.target.value
        });
    }
    

    console.log('Render');
    return(<div>
        <form>
            <div className={"form-group"}>
                <label htmlFor="price">Price</label>
                <input type={"text"}
                       id="price"
                       className={"form-control"}
                       name={"price"}
                        value={state.price}
                        onChange={onChangeHandler}/>
            </div>
            <div className={"form-group"}>
                <label htmlFor="qty">Qty</label>
                <input type={"text"} id="qty"
                       className={"form-control"}
                       name ="qty"
                       value={state.qty}
                       onChange={onChangeHandler}/>
            </div>
            <div className={"form-group"}>
                <label htmlFor="total">Total &nbsp;</label>
                {state.price* state.qty}
            </div>
        </form>
    </div>)
}