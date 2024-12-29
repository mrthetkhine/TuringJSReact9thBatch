import Movie from "../../../../types/movie";
import axiosInstance from "../../axiosInstance";
import Review from "../../../../types/review";
import ReviewUI from "./ReviewUI";
import NewReviewForm from "./NewReviewForm";
import styles from './MovieReviews.module.css';
export default async function MovieReviews({movie}:{movie:Movie})
{
    let reviews:Review[] = [];
    try {
        const commentResponse = await axiosInstance.get(`/api/reviews/movies/${movie._id}`);
        reviews = commentResponse.data;
    }
    catch (err)
    {
        reviews=[];
    }
    return(<div>
        <NewReviewForm movieId={movie._id}/>
        <div className={styles['review-container']}>
            {
                reviews && reviews.map(review=><ReviewUI review={review}/>)
            }
        </div>

    </div>);

}