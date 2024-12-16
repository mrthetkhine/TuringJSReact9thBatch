import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button} from "react-bootstrap";
import {Rating} from "@smastrom/react-rating";
import {useState} from "react";
import Swal from 'sweetalert2'
import {useSaveReviewMutation} from "@/lib/features/review/reviewApiSlice";
import Review from "@/types/review";

const schema=Yup.object({
    review: Yup.string()
        .required('Review required'),
    rating: Yup.number()
        .required('Rating required'),

});
export default function ReviewForm({
                                       movieId,handleClose}:{
        movieId:string,
        handleClose:()=>void
})
{
    const [saveReviewApi,saveReviewApiResult] = useSaveReviewMutation();
    const initialValues={
       review:'',
       rating:0,
    }
    const [rating,setRating] =useState(0);
    const onSubmit =(values:any)=>{
        //values.rating = rating;
        console.log('Values ',values);
        const reviewToSave:Review = {
            ...values,
            rating,
            movie:movieId,
        };
        saveReviewApi(reviewToSave)
            .unwrap()
            .then(data=>{
                Swal.fire("Review successfully saved");
                handleClose();
            },error=>{
                console.log('Error ',error);
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
                    <label htmlFor={`review`}>Review</label>
                    <Field
                        className={"form-control"}
                        name={`review`}
                        placeholder="Review"
                        type="text"
                    />
                    <ErrorMessage
                        name={`review`}
                        component="div"
                        className="alert alert-danger"
                    />
                </div>
                <div className={"form-group"}>
                    <label htmlFor={`rating`}>Rating</label>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        onChange={setRating}
                    />
                </div>
                &nbsp;
                <div className={"form-group"}>
                    <button type="submit" className={"btn btn-primary"}>
                        Save
                    </button>
                    &nbsp;
                    <Button variant="primary" onClick={handleClose}>
                        Cancel
                    </Button>
                </div>

            </Form>
        )}
    </Formik>);

}