import Review from "@/types/review";
import styles from './ReviewUI.module.css';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import Swal from "sweetalert2";
import {useDeleteReviewMutation} from "@/lib/features/review/reviewApiSlice";
export default function ReviewUI({review}:{review:Review})
{
    const [deleteReviewApi,deleteReviewResult] = useDeleteReviewMutation();
    const btnDeleteHandler = ()=>{
        Swal.fire({
            title: "Do you want to delete movie?",
            showCancelButton: true,
            confirmButtonText: "Delete",

        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Delete!", "", "success");
                deleteReviewApi(review)
                    .unwrap()
                    .then(data=>{
                        Swal.fire("Delete!", "", "success");
                    },error=>console.log('Delete error ',error))

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
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={btnDeleteHandler}>Delete
            </button>
        </div>
    </div>);
}