'use server';
import axiosInstance from "../axiosInstance";
import {redirect} from "next/navigation";
import { cookies } from 'next/headers'
import { z } from "zod";

const loginSchema = z.object({
    username:z.string().min(1,{message:'Username required'}),
    password:z.string().min(1,{message:'Password required'}),

})
export async function loginAction(prevState:any, formData:FormData)
{
    //await new Promise((resolve,reject)=> setTimeout(()=>resolve(),5000));
    //console.log('FormData ',formData);

    const loginFormData = Object.fromEntries(formData);
    const validatedLoginFormData = loginSchema.safeParse(loginFormData);

    if(!validatedLoginFormData.success)
    {
        const formFieldErrors = validatedLoginFormData.error.flatten().fieldErrors;
        return {
            errors: {
                username: formFieldErrors?.username,
                password: formFieldErrors?.password,

            },
        };
    }
    else
    {
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
                let redirectUrlFromCookie = await cookieStore.get('redirectUrl');
                console.log('redirectUrlFromCookie ',redirectUrlFromCookie);
                cookieStore.set('auth-token',loginData.token,{
                    httpOnly:true,
                });

                if(redirectUrlFromCookie?.value)
                {
                    redirectUrl = redirectUrlFromCookie?.value;
                    cookieStore.delete('redirectUrl');
                }
                else
                {
                    redirectUrl='/home';
                }


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



}
export  async  function logoutAction()
{
    'use server';
    const cookieStore = await cookies()
    cookieStore.delete( 'auth-token');

    redirect('/login');
}