import React from 'react';
import { useFormik } from 'formik';

 const FormikSimpleExample = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            username: '',
            password:'',
        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={"form-group"}>
                <label htmlFor="username">UserName</label>
                <input
                    id="username"
                    name="username"
                    className={"form-control"}
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
            </div>
            <div className={"form-group"}>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type={"password"}
                    className={"form-control"}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
            </div>


            <button type="submit" className={"btn btn-primary"}>Submit</button>
        </form>
    );
};
export default FormikSimpleExample;