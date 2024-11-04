import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const schema=Yup.object({
    firstName: Yup.string()
        .max(5, 'Must be 15 characters or less')
        .required('Required'),
    lastName: Yup.string()
        .max(5, 'Must be 20 characters or less')
        .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
});
const FormWithValidation = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={"form-group"}>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                className={"form-control"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
                <div className={"alert alert-danger"}>{formik.errors.firstName}</div>
            ) : null}
            </div>
            <div className={"form-group"}>
            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                className={"form-control"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
                <div className={"alert alert-danger"}>{formik.errors.lastName}</div>
            ) : null}
            </div>
            <div className={"form-group"}>
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    className={"form-control"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className={"alert alert-danger"}>{formik.errors.email}</div>
                ) : null}
            </div>

            <button type="submit" className={"btn btn-primary"}>Submit</button>
        </form>
    );
};
export default FormWithValidation;