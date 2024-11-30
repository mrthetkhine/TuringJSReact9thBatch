import  { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import {TodoModel} from '@/lib/features/todos-api/todoApiSlice';
import { useSaveTodoMutation } from "@/lib/features/todos-api/todoApiSlice";

const todoSchema=Yup.object({
    title: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
});
export default function TodoEntry()
{
    const [saveTodo, result] = useSaveTodoMutation();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onNewHandler = ()=>{
      console.log('Click on new');
    };
    const formik = useFormik({
        initialValues: {
            title: '',
        },
        validationSchema: todoSchema,
        onSubmit: values => {
            //alert(JSON.stringify(values, null, 2));
            console.log('Values ',values);
            let newTodo:TodoModel = {
                ...values,
                completed:false
            }
            saveTodo(newTodo)
                .unwrap()
                .then(data=>{
                    console.log('Result ',data);
                    handleClose();
                });

        },
    });
    return (<div>
        <button type="button"
                className={"btn btn-primary"}
                onClick={handleShow}>
            New
        </button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>New Todo </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={formik.handleSubmit}>
                    <div className={"form-group"}>
                        <label htmlFor="title">Task</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            className={"form-control"}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.title}
                        />
                        {formik.touched.title && formik.errors.title ? (
                            <div className={"alert alert-danger"}>{formik.errors.title}</div>
                        ) : null}
                    </div>

                    <div className={"form-group"}>
                        <button type="submit" className={"btn btn-primary"}>Submit</button>
                    </div>
                 </form>
            </Modal.Body>

        </Modal>

    </div>);
}