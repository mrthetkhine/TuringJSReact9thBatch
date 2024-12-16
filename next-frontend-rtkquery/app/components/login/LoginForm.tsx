import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Rating} from "@smastrom/react-rating";
import {Button} from "react-bootstrap";
import {useRouter} from "next/navigation";
import { useSearchParams } from 'next/navigation';
import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {selectCount} from "@/lib/features/counter/counterSlice";
import {login, selectAuth} from "@/lib/features/auth/authSlice";

const schema=Yup.object({
    username: Yup.string()
        .required('Username required'),
    password: Yup.string()
        .required('Password required'),

});
export default function LoginForm()
{
    const router =useRouter();
    const dispatch = useAppDispatch();
    const auth = useAppSelector(selectAuth);
    const searchParams = useSearchParams();
    //console.log('is login ',auth);

    const redirectUrl = searchParams.get('redirectUrl');
    useEffect(()=>{
        console.log('Use effect fired');
        //console.log('Auth ',auth, ' redirect url ',redirectUrl);
        if(auth)
        {
            if(redirectUrl)
            {
                router.push(redirectUrl);
            }
            else
            {
                router.push('/');
            }

        }
    },[]);

    const initialValues={
        username:'',
        password:'',
    }
    const onSubmit =(values:any)=>{
        console.log('Values ',values);
        dispatch(login(values))
            .unwrap()
            .then(data=>{
                console.log('Login success ',data);
                if(redirectUrl)
                {
                    router.push(redirectUrl);
                }
                else
                {
                    router.push('/');
                }
            },error=>{
               console.log('Invalid login');
            });
    };
    return(<Formik
        initialValues={initialValues}
        validationSchema= {schema}
        onSubmit={onSubmit}>
        {({ values }) =>(
            <Form>
                <div className={"from-group"}>
                    <label htmlFor={`review`}>Username</label>
                    <Field
                        className={"form-control"}
                        name={`username`}
                        placeholder="Username"
                        type="text"
                    />
                    <ErrorMessage
                        name={`username`}
                        component="div"
                        className="alert alert-danger"
                    />
                </div>
                <div className={"form-group"}>
                    <label htmlFor={`password`}>Password</label>
                    <Field
                        className={"form-control"}
                        name={`password`}
                        placeholder="password"
                        type="password"
                    />
                    <ErrorMessage
                        name={`password`}
                        component="div"
                        className="alert alert-danger"
                    />

                </div>
                &nbsp;
                <div className={"form-group"}>
                    <button type="submit" className={"btn btn-primary"}>
                        Login
                    </button>
                    &nbsp;

                </div>

            </Form>
        )}
    </Formik>);
}