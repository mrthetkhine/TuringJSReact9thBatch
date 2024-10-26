import {useState} from "react";
import {produce} from "immer";
export default function DeepObjectState(props) {
    const [state, setState] = useState({
        name : "TK",
        address: {
            city: 'YGN'
        }
    })
    const updateCityHandler = ()=>{
      /*  let newState = {
            ...state,
            address:{
                ...state.address,
                city: 'Somewhere'
            }
        }
        setState(newState);*/
        setState(
            produce((draft) => {
                draft.address.city = "Somewhere";
            })
        );
    }
    return (<div>
        City {state.address.city}
        <button onClick={updateCityHandler}>Change City</button>
    </div>);
}