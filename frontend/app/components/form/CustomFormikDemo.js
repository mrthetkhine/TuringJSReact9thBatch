import CustomFormik from "./CustomFormik";
import React from "react";
import {Formik} from "formik";

export default function CustomFormikDemo()
{
    return <CustomFormik
                initialValues={{
                    name: 'jared',
                    description : 'Desc'
                }}
                onSubmit={(values, actions) => {
                    console.log(JSON.stringify(values));
                }}
    >
        {
            (props)=><div>
                <div className={"form-group"}>
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

                        </div>
                        <div className={"form-group"}>
                            <button type="submit" className={"btn btn-primary"}>Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        }
    </CustomFormik>
}