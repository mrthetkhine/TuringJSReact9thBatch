import React from 'react';
import { Formik } from 'formik';

const FormikBasicExample = () => (
    <div>
        <h1>My Form</h1>
        <Formik
            initialValues={{
                name: 'jared',
                description : 'Desc'
            }}
            onSubmit={(values, actions) => {
                console.log(JSON.stringify(values));
            }}
        >
            {props => (
                <form onSubmit={props.handleSubmit}>
                    <div className={"form-group"}>
                        <label>Name</label>
                        <input
                            className={"form-control"}
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.name}
                            name="name"
                        />
                        {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                    </div>
                    <div className={"from-group"}>
                        <label>Description</label>
                        <input
                            className={"form-control"}

                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.description}
                            name="description"
                        />
                        {props.errors.description && <div id="feedback">{props.errors.description}</div>}
                    </div>
                    <div className={"form-group"}>
                        <button type="submit" className={"btn btn-primary"}>Submit</button>
                    </div>

                </form>
            )}
        </Formik>
    </div>
);
export default FormikBasicExample;