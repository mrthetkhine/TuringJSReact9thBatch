import axiosInstance from "../axiosInstance";
import {redirect} from "next/navigation";
import { cookies } from 'next/headers'

export default async function loginAction(formData:FormData)
{
    'use server';
    let user = {
        username : formData.get('username'),
        password:formData.get('password')
    }
    let redirectUrl = '';
    try {
        const loginResponse = await axiosInstance.post('/api/users/login',user);
        const loginData = loginResponse.data;
        //console.log('loginData ',loginData);

        if(loginData.token)
        {
            const cookieStore = await cookies()
            cookieStore.set('auth-token',loginData.token,{
                httpOnly:true,
            });

            redirectUrl='/home';
            //return;
        }

    }
    catch(err)
    {
        console.log('login failed ',err);
        redirectUrl='/login';
    }
    finally {
        redirect(redirectUrl);
    }


}