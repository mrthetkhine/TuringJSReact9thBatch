"use client";
import {useAppDispatch} from "@/lib/hooks";
import {logout} from "@/lib/features/auth/authSlice";

import {useRouter} from "next/navigation";
import {movieApiSlice} from "@/lib/features/movies/movieApiSlice";
import {reviewApiSlice} from "@/lib/features/review/reviewApiSlice";

export default function LogoutPage()
{
    const router =useRouter();
    const dispatch = useAppDispatch();
    const btnLogoutHandler = ()=>{
        console.log('logout');
        dispatch(logout());
        dispatch(movieApiSlice.util.resetApiState());
        dispatch(reviewApiSlice.util.resetApiState());
        router.push('/');
    };
    return(<div>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={btnLogoutHandler}>
            Logout
        </button>
    </div>);
}