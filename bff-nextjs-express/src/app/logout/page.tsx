import {logoutAction} from "../actions/authAction";
import styles from './logout.module.css';
export default  function LogoutPage()
{
    //console.log('');
    return(<div className={styles['logout-container']}>
        <div></div>
        <form action={logoutAction}>
            <div className={"from-group"}>
                <label></label>
                <button type={"submit"} className={"btn btn-primary"}>Logout</button>
            </div>

        </form>
    </div>);
}