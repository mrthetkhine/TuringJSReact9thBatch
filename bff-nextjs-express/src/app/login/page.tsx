'use client';
import {loginAction} from '../actions/authAction';
import {useFormState} from "react-dom";
import {Metadata} from "next";
const initialState = {
    success: "",
    errors: {
        username: "",
        password: "",
    }
};

export default function Page()
{
    const [state, formAction,isPending] = useFormState(loginAction, initialState);
    console.log('State ',state);
    return (<div>
        <form action={formAction}>
            <div className={"from-group"}>
                <label>Username</label>
                <input type={"text"} name={"username"} className={"form-control"}/>
                {state.errors?.username && (
                    <div className="alert alert-danger">{state.errors.username}</div>
                )}
            </div>
            <div className={"from-group"}>
                <label>Password</label>
                <input type={"password"} name={"password"} className={"form-control"}/>
                {state.errors?.password && (
                    <div className="alert alert-danger">{state.errors.password}</div>
                )}
            </div>
            <div className={"from-group"}>
                <label></label>
                <button type={"submit"} className={"btn btn-primary"}  disabled={isPending}>Login</button>
            </div>
        </form>
    </div>)
}
