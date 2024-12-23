import {Button, Modal} from "react-bootstrap";
import Swal from 'sweetalert2'
import { useFormik,Form,FieldArray,ErrorMessage,Field,Formik } from 'formik';
import * as Yup from 'yup';
import './MovieFormDialog.css';
import Movie from "../../../types/movie";



const schema=Yup.object({
    title: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Name required'),
    year: Yup.number()
        .required('Year required'),
    director: Yup.string().required('Director required'),
   /* details: Yup.string().required('Details required'),*/
   /* actors: Yup.array().of(
        Yup.object().shape({
            firstName: Yup.string().required("FirstName required"),
            lastName: Yup.string().required("LastName required"),
        })
    )*/
});
const initialValues={
    title: '',
    year: 0,
    director: '',

   /* actors:[
        {
            firstName:'',
            lastName:'',
        }
    ]*/
}
const MovieForm = ({
                       handleClose,
                        movieToEdit

                }:{
                handleClose:()=>void,
                movieToEdit?:Movie,
                    }) => {
    console.log('Title ',movieToEdit?.title);
    const initialValues={
        title: movieToEdit?.title,
        year: movieToEdit?.year,
        director: movieToEdit?.director?.name,

        /* actors:[
             {
                 firstName:'',
                 lastName:'',
             }
         ]*/
    }

    function saveNewMovie(values: any) {
        console.log('Save movie ',values);
    }
    function  updateMovie(values:any)
    {
        console.log('Update movies ',values);


    }

    const onSubmit = (values:any)=>{
        //console.log(JSON.stringify(values, null, 2));
        if(movieToEdit){
            updateMovie(values);
        }
        else
        {
            saveNewMovie(values);
        }

    }
    return (<Formik
            initialValues={initialValues}
            validationSchema= {schema}
            onSubmit={onSubmit}>
            {({ values }) =>(
                <Form>
                    <div className={"from-group"}>
                        <label htmlFor={`name`}>Title</label>
                        <Field
                            className={"form-control"}
                            name={`title`}
                            placeholder="Movie Name"
                            type="text"
                        />
                        <ErrorMessage
                            name={`title`}
                            component="div"
                            className="alert alert-danger"
                        />
                    </div>
                    <div className={"from-group"}>
                        <label htmlFor={`year`}>Year</label>
                        <Field
                            className={"form-control"}
                            name={`year`}
                            placeholder="Movie Year"
                            type="text"
                        />
                        <ErrorMessage
                            name={`year`}
                            component="div"
                            className="alert alert-danger"
                        />
                    </div>
                    <div className={"from-group"}>
                        <label htmlFor={`director`}>Director</label>
                        <Field
                            className={"form-control"}
                            name={`director`}
                            placeholder="Director"
                            type="text"
                        />
                        <ErrorMessage
                            name={`director`}
                            component="div"
                            className="alert alert-danger"
                        />
                    </div>

                <button type="submit" className={"btn btn-primary"}>
                    {movieToEdit?'Update':'Save'}
                </button>
                &nbsp;
                <Button variant="primary" onClick={handleClose}>
                    Cancel
                </Button>
                </Form>
            )}
    </Formik>);


};
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