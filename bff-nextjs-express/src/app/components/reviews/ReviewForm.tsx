import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button} from "react-bootstrap";
import {Rating} from "@smastrom/react-rating";
import {useState} from "react";
import Swal from 'sweetalert2'
import Review from "../../../../types/review";
import {saveReviewAction, updateReviewAction} from "../../actions/reviewAction";

const schema=Yup.object({
    review: Yup.string()
        .required('Review required'),
    rating: Yup.number()
        .required('Rating required'),

});
export default function ReviewForm({
                                       movieId,
                                       handleClose,
                                        reviewToEdit}:{
        movieId:string,
        reviewToEdit?:Review,
        handleClose:()=>void
})
{

    const initialValues={
       review:reviewToEdit?.review??'',
       rating:reviewToEdit?.rating??0,
    }
    const [rating,setRating] =useState(reviewToEdit?.rating??0,);

    function saveReview(values: any) {
        const reviewToSave: Review = {
            ...values,
            rating,
            movie: movieId,
        };
        let formData = new FormData();
        console.log("Entries ", Object.entries(reviewToSave));
        for (const [key, value] of Object.entries(reviewToSave)) {
            formData.append(key, value);
        }
        console.log('Form Data ', formData);
        saveReviewAction(formData)
            .then(data => {
                console.log('Review successfully saved');
                handleClose();
            }, err => {
                console.log('Error ', err);
            })
    }

    function updateReview(values: any) {
        //update review
        const reviewToUpdate: Review = {
            ...values,
            rating,
            movie: movieId,
            _id: reviewToEdit?._id,
        };
        console.log('Values ', values);
        console.log('Update review ', reviewToUpdate);
        let formData = new FormData();
        console.log("Entries ", Object.entries(reviewToUpdate));
        for (const [key, value] of Object.entries(reviewToUpdate)) {
            formData.append(key, value);
        }
        console.log('Form Data ', formData);
        updateReviewAction(formData)
            .then(data => {
                console.log('Review successfully updated');
                handleClose();
            }, err => {
                console.log('Error ', err);
            })
    }

    const onSubmit =(values:any)=>{
        //values.rating = rating;

        if(reviewToEdit)
        {
            updateReview(values);
        }
        else
        {
            //save review
            saveReview(values);
        }

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
                        {reviewToEdit?'Update':'Save'}
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