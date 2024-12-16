import {movieApiSlice} from "@/lib/features/movies/movieApiSlice";
import Review from "@/types/review";
import Movie from "@/types/movie";

export const reviewApiSlice = movieApiSlice.injectEndpoints({
    endpoints: build => ({
        getAllReviewByMovieId: build.query<Review[], string>({
            query: (movieId:string) => `/reviews/movies/${movieId}`
        }),
        saveReview:build.mutation<Review,Review>({
            query: (review:Review) => ({
                url: `/reviews/`,
                method: 'POST',
                body: review,
            }),
            //Pessimistic update
            async onQueryStarted(review:Review , { dispatch, queryFulfilled }) {
                console.log('review ',review);
                let patchResult ;
                try {
                    const {data:savedReview} = await queryFulfilled;
                    patchResult = dispatch(
                        reviewApiSlice.util.updateQueryData('getAllReviewByMovieId', review.movie, (draft) => {
                            draft.push(savedReview);
                            console.log('Draft ',draft);
                            //return draft;
                        }),
                    );
                    console.log('Saved Review ',savedReview);
                } catch(err) {
                    console.log('Err ',err);
                }
            }

        }),
        deleteReview:build.mutation<Review,Review>({
            query: (review:Review) => ({
                url: `/reviews/${review._id}`,
                method: 'DELETE',

            }),
            //Pessimistic update
            async onQueryStarted(review:Review , { dispatch, queryFulfilled }) {
                console.log('review ',review);
                let patchResult ;
                try {
                    const {data:deleteReview} = await queryFulfilled;
                    patchResult = dispatch(
                        reviewApiSlice.util.updateQueryData('getAllReviewByMovieId', review.movie, (draft) => {
                            draft = draft.filter(r=>r._id!= deleteReview._id);
                            console.log('Draft ',draft);
                            //return draft;
                        }),
                    );
                    console.log('Delete Review ',deleteReview);
                } catch(err) {
                    console.log('Err ',err);
                }
            }

        }),
    })
});
export const { useGetAllReviewByMovieIdQuery, useSaveReviewMutation,useDeleteReviewMutation} = reviewApiSlice;