import {Component, useState} from "react";

export default function FilterProductTable({updateFilterChange}) {
    const [filter,setFilter] = useState("");
    const [showOnlyInStock, setShowOnlyInStock] = useState(false);
    const filterOnChange = (event)=>{
        updateFilterChange({
            filter:event.target.value,
            showOnlyInStock

        });
        setFilter(event.target.value);

    };

    const showOnlyInStockChangeHandler = (event)=>{
        updateFilterChange({
            filter,
            showOnlyInStock: event.target.checked
        });
        setShowOnlyInStock(event.target.checked);

    }
    return (<div >
        <div className={"form-group"}>
            <input type={"text"}
                   className={"form-control form-input"}
                    value={filter}
                    onChange={filterOnChange}/>

        </div>
        <div className={"form-group"}>

            <input type={"checkbox"}
                   id ="onlyInStock"
                   className={"form-control form-check-input"}
                    checked={showOnlyInStock}
                    onChange={showOnlyInStockChangeHandler}/>
            <label htmlFor="onlyInStock">Show product only in stock</label>
        </div>
    </div>);
}