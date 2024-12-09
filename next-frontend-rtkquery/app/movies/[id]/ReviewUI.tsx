import Review from "@/types/review";
import styles from './ReviewUI.module.css';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
export default function ReviewUI({review}:{review:Review})
{
    return(<div className={styles.container}>
        <div> {review.review}</div>
        <div>
            {/*Rating {review.rating}*/}
            <Rating
                style={{ maxWidth: 100 }}
                value={review.rating}

            />
        </div>
    </div>);
}