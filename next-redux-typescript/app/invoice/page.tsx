'use client';
import { useFormState } from "react-dom";
import createUser from "@/app/actions/createUser";

const initialState = {
    message: '',
}
export default function Page()
{
    const [state, formAction] = useFormState(createUser, initialState)
    console.log('Invoice page ',state);
    
    return (<div>
       
        {state?.success && state?.success?.message}
        <form action={formAction}>
            <div className={"form-group"}>
                <label>Username</label>
                <input className={"form-control"} name={"username"}/>
                {state?.errors?.username &&  <div className={"alert alert-danger"}>
                    {state.errors.username}
                </div>
                }

            </div>
            <div className={"form-group"}>
                <label>Email</label>
                <input className={"form-control"}  name={"email"}/>
                {state?.errors?.email &&  <div className={"alert alert-danger"}>
                    {state.errors.email}
                    </div>
                }
            </div>
            <div className={"form-group"}>
                <label>Status</label>
                <input className={"form-control"} name={"status"}/>
                {state?.errors?.status &&  <div className={"alert alert-danger"}>
                    {state.errors.status}
                </div>
                }
            </div>
            <div className={"form-group"}>
                <button type={"submit"} className={"btn btn-primary"}>Submit</button>
            </div>
        </form>
    </div>);
}