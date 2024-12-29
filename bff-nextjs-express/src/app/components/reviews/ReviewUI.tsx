'use client';
import styles from './ReviewUI.module.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Swal from "sweetalert2";

import Review from "../../../../types/review";
import {deleteReviewAction} from "../../actions/reviewAction";
import {useState} from "react";
import ReviewFormDialog from "./ReviewFormDialog";
export default function ReviewUI({review}:{review:Review})
{
    const [show,setShow] = useState(false);
    const handleClose =()=>{
        setShow(false);
    }
    const handleOpen = ()=>{
        setShow(true);
    }
    const btnNewHandler =()=>{
        console.log('Btn new handler');
        handleOpen();
    };
    const btnDeleteHandler = ()=>{
        Swal.fire({
            title: "Do you want to delete movie?",
            showCancelButton: true,
            confirmButtonText: "Delete",

        }).then((result) => {
            if (result.isConfirmed) {
                deleteReviewAction(review)
                    .then(data=>{
                        console.log('Success');
                        Swal.fire("Delete!", "", "success");
                    },err=>{
                        console.log('Failed to delete');
                    })


            }
        });
    }
    return(<div className={styles.container}>
        <div> {review.review}</div>
        <div>
            {/*Rating {review.rating}*/}
            <Rating
                style={{ maxWidth: 100 }}
                value={review.rating}

            />
            <div></div>
            <ReviewFormDialog show={show}
                              handleClose={handleClose}
                              movieId={review.movie}
                              reviewToEdit={review}/>

            <div>
                <button type={"button"}
                        className={"btn btn-primary"}
                        onClick={handleOpen}>Update
                </button>

                <button type={"button"}
                        className={"btn btn-primary"}
                        onClick={btnDeleteHandler}>Delete
                </button>
            </div>

        </div>
    </div>);
}