import {Button, Modal} from "react-bootstrap";
import Swal from 'sweetalert2'
import { useFormik,Form,FieldArray,ErrorMessage,Field,Formik } from 'formik';
import * as Yup from 'yup';
import './MovieFormDialog.css';
import Movie from "../../../types/movie";
import {useFormState, useFormStatus} from "react-dom";
import {loginAction} from "../actions/authAction";
import {saveMovieAction} from "../actions/movieAction";
import {useEffect, useTransition} from "react";

const initialState = {
    success: "",
    errors: {
        title: "",
        year: "",
        director:"",
    }
};


const MovieForm = ({
                       handleClose,
                        movieToEdit

                }:{
                handleClose:()=>void,
                movieToEdit?:Movie,
                    }) => {
    const [state, formAction,isPendingForm] = useFormState(saveMovieAction, initialState);
    console.log('State ',state);
    useEffect(()=>{
        console.log('Run effect ', state);
        if(!state)
        {
            handleClose();
        }
    })

    return (<div>
        <form action={formAction}>
            <div className={"from-group"}>
                <label>Title</label>
                <input type={"text"} name={"title"} className={"form-control"}/>
                {state?.errors?.title && (
                    <div className="alert alert-danger">{state.errors.title}</div>
                )}
            </div>
            <div className={"from-group"}>
                <label>Year</label>
                <input type={"text"} name={"year"} className={"form-control"}/>
                {state?.errors?.year && (
                    <div className="alert alert-danger">{state.errors.year}</div>
                )}
            </div>
            <div className={"from-group"}>
                <label>Director</label>
                <input type={"text"} name={"director"} className={"form-control"}/>
                {state?.errors?.director && (
                    <div className="alert alert-danger">{state.errors.director}</div>
                )}
            </div>
            <div className={"from-group"}>
                <label></label>
                <SubmitButton/>
            </div>
        </form>
    </div>);


};
export function SubmitButton()
{
    const status = useFormStatus();
    console.log('Form status ',status);
    return(<button type={"submit"} className={"btn btn-primary"}  disabled={status.pending}>Submit</button>);
}
export default function MovieFormDialog({show,handleClose,movieToEdit}:{
    show:boolean,
    handleClose:()=>void,
    movieToEdit?:Movie
})
{

    return(<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{movieToEdit?'Edit Movie':'New Movie'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <MovieForm
                handleClose={handleClose}
                movieToEdit={movieToEdit}
            />
        </Modal.Body>
        {/*<Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
        </Modal.Footer>*/}
    </Modal>);
}