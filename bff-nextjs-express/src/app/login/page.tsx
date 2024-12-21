import loginAction from '../actions/loginAction';

export default function Page()
{

    return (<div>
        <form action={loginAction}>
            <div className={"from-group"}>
                <label>Username</label>
                <input type={"text"} name={"username"} className={"form-control"}/>
            </div>
            <div className={"from-group"}>
                <label>Password</label>
                <input type={"password"} name={"password"} className={"form-control"}/>
            </div>
            <div className={"from-group"}>
                <label></label>
                <button type={"submit"} className={"btn btn-primary"}>Login</button>
            </div>
        </form>
    </div>)
}