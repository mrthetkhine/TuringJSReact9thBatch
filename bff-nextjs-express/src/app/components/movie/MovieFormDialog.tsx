import {Button, Modal} from "react-bootstrap";
import Swal from 'sweetalert2'
import { useFormik,Form,FieldArray,ErrorMessage,Field,Formik } from 'formik';
import * as Yup from 'yup';
import './MovieFormDialog.css';
import Movie from "../../../../types/movie";
import {useFormState, useFormStatus} from "react-dom";
import {loginAction} from "../../actions/authAction";
import { saveOrUpdateAction} from "../../actions/movieAction";
import {ChangeEvent, useEffect, useState, useTransition} from "react";

const initialState = {
    success: "",
    errors: {
        _id:"",
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
    const [id,setId]  =useState(movieToEdit?._id??'');
    const [title,setTitle] = useState(movieToEdit?.title??'');
    const [year,setYear] = useState(movieToEdit?.year??'');
    const [director,setDirector] = useState(movieToEdit?.director?.name??'');
    const [state, saveOrUpdateMovie,isPendingForm] = useFormState(saveOrUpdateAction, initialState);

    console.log('State ',state);
    useEffect(()=>{
        console.log('Run effect ', state);
        if(!state)
        {
            handleClose();
        }
    })

    return (<div>
        <form action={saveOrUpdateMovie}>
            <div className={"from-group"}>

                <input type={"hidden"} name={"_id"} className={"form-control"} value={id}/>

            </div>
            <div className={"from-group"}>
                <label>Title</label>
                <input type={"text"}
                       name={"title"}
                       className={"form-control"}
                       value={title}
                       onChange={(e:ChangeEvent<HTMLInputElement>)=>setTitle(e.target.value)}/>
                {state?.errors?.title && (
                    <div className="alert alert-danger">{state.errors.title}</div>
                )}
            </div>
            <div className={"from-group"}>
                <label>Year</label>
                <input type={"text"}
                       name={"year"}
                       className={"form-control"}
                       value={year}
                       onChange={(e:ChangeEvent<HTMLInputElement>)=>setYear(e.target.value)}/>
                {state?.errors?.year && (
                    <div className="alert alert-danger">{state.errors.year}</div>
                )}
            </div>
            <div className={"from-group"}>
                <label>Director</label>
                <input type={"text"}
                       name={"director"}
                       className={"form-control"}
                       value={director}
                       onChange={(e:ChangeEvent<HTMLInputElement>)=>setDirector(e.target.value)}/>
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

    </Modal>);
}