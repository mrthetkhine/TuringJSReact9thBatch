import {Button, Modal} from "react-bootstrap";
import Swal from 'sweetalert2'
import { useFormik,Form,FieldArray,ErrorMessage,Field,Formik } from 'formik';
import * as Yup from 'yup';
import './MovieFormDialog.css';
import Movie from "@/types/movie";
import {useSaveMovieMutation} from "@/lib/features/movies/movieApiSlice";
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
const MovieForm = ({handleClose}:{
    handleClose:()=>void,
}) => {
    const [saveMovie,result] = useSaveMovieMutation();
    const onSubmit = (values:any)=>{
        //console.log(JSON.stringify(values, null, 2));
        const newMovie:Movie ={
            ...values,
            director:{
                name:values.director
            }

        }
        console.log('New Movie ',newMovie);
        saveMovie(newMovie)
            .unwrap()
            .then(data=> {
                console.log('Success');
                Swal.fire("Movie successfully saved");
                handleClose();
            }, error=>{
                console.log('Error');
                handleClose();
            });
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
                <button type="submit" className={"btn btn-primary"}>Save</button>
                &nbsp;
                <Button variant="primary" onClick={handleClose}>
                    Cancel
                </Button>
                </Form>
            )}
    </Formik>);


};
export default function MovieFormDialog({show,handleClose}:{
    show:boolean,
    handleClose:()=>void,
})
{
    return(<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <MovieForm handleClose={handleClose}/>
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