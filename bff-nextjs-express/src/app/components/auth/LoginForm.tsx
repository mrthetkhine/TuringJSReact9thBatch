'use client';

import {useFormState} from "react-dom";
import {Metadata} from "next";
import { useSearchParams } from 'next/navigation'
import {loginAction} from "../../actions/authAction";
const initialState = {
    success: "",
    errors: {
        username: "",
        password: "",
    }
};
export default function LoginForm()
{
    const searchParams = useSearchParams()
    const search = searchParams.get('redirectUrl');

    console.log('Redirect url ',search);
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