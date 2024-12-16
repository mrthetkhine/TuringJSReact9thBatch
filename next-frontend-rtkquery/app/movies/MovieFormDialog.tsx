import {Button, Modal} from "react-bootstrap";
import Swal from 'sweetalert2'
import { useFormik,Form,FieldArray,ErrorMessage,Field,Formik } from 'formik';
import * as Yup from 'yup';
import './MovieFormDialog.css';
import Movie from "@/types/movie";
import {useSaveMovieMutation, useUpdateMovieMutation} from "@/lib/features/movies/movieApiSlice";
import Director from "@/types/director";
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
    const [saveMovieApi,result] = useSaveMovieMutation();
    const [updateMovieApi,updateResult] = useUpdateMovieMutation();
    function saveNewMovie(values: any) {
        const newMovie: Movie = {
            ...values,
            director: {
                name: values.director
            }

        }
        console.log('New Movie ', newMovie);
        saveMovieApi(newMovie)
            .unwrap()
            .then(data => {
                console.log('Success');
                Swal.fire("Movie successfully saved");
                handleClose();
            }, error => {
                console.log('Error');
                handleClose();
            });
    }
    function  updateMovie(values:any)
    {
        let movieToUpdate:Movie = {
            ...movieToEdit,
            title:values.title,
            year:values.year,
            director: {
                ...movieToEdit?.director?? {} as Director,
                name: values.director
            }
        }
        console.log('Director ',movieToUpdate.director);
        //movieToUpdate.director.name = values.director;
        updateMovieApi(movieToUpdate)
            .then(data => {
            console.log('Success');
            Swal.fire("Movie successfully updated");
            handleClose();
        }, error => {
            console.log('Error');
            handleClose();
        });


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
                    {/*<div className={"from-group"}>
                        <label htmlFor={`details`}>Details</label>
                        <Field
                            className={"form-control"}
                            name={`details`}
                            placeholder="details"
                            type="text"
                        />
                        <ErrorMessage
                            name={`details`}
                            component="div"
                            className="alert alert-danger"
                        />
                    </div>*/}

                {/*<FieldArray name="actors">
                    {({ insert, remove, push }) => (
                        <div>
                            {values.actors.length > 0 &&
                            values.actors.map((actors, index) => (
                                <div key={index}>
                                    <div className={"form-group"} >
                                        <label htmlFor={`actors.${index}.firstName`}>FirstName</label>
                                        <Field
                                            className={"form-control"}
                                            name={`actors.${index}.firstName`}
                                            placeholder="First Name"
                                            type="text"
                                        />
                                        <ErrorMessage
                                            name={`actors.${index}.firstName`}
                                            component="div"
                                            className="alert alert-danger"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor={`actors.${index}.lastName`}>LastName</label>
                                        <Field
                                            name={`actors.${index}.lastName`}
                                            className={"form-control"}
                                            placeholder="Last Name"
                                            type="text"
                                        />
                                        <ErrorMessage
                                            name={`actors.${index}.lastName`}
                                            component="div"
                                            className="alert alert-danger"
                                        />

                                        <div className="col">
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={() => remove(index)}
                                            >
                                                X
                                            </button>
                                        </div>
                                    </div>
                                </div>


                            ))}
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => push({ firstName: '', lastName: '' })}
                            >
                                Add Actor
                            </button>
                            <hr/>
                        </div>
                    )}
                </FieldArray>*/}
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