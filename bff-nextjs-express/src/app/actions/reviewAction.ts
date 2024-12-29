'use server';
import {z} from "zod";
import axiosInstance from "../axiosInstance";
import {revalidatePath} from "next/cache";
import Review from "../../../types/review";

const reviewSchema = z.object({
    movie:z.string().min(1,{message:'Movie required'}),
    rating:z.string().min(1,{message:'Rating required'}),
    review:z.string().min(1,{message:'Review required'}),
})
const reviewUpdateSchema = z.object({
    _id:z.string().min(1,{message:'review id required'}),
    movie:z.string().min(1,{message:'Movie required'}),
    rating:z.string().min(1,{message:'Rating required'}),
    review:z.string().min(1,{message:'Review required'}),
})

export async function saveReviewAction( formData:FormData)
{
    console.log('Save review action ');
    const reviewFormData = Object.fromEntries(formData);
    const validateReviewFormData = reviewSchema.safeParse(reviewFormData);

    if(!validateReviewFormData.success)
    {
        console.log('Error ',validateReviewFormData.error)
        const formFieldErrors = validateReviewFormData.error.flatten().fieldErrors;
        return {
            errors: {
                movie: formFieldErrors?.movie,
                rating: formFieldErrors?.rating,
                review: formFieldErrors?.review,

            },
        };
    }
    else
    {
        console.log('Saving review');
        //Save movies
        let redirectUrl = '';
        let review = {
            movie:formData.get('movie'),
            rating:formData.get('rating'),
            review :formData.get('review')
        }
        try {
            const reviewSaveResponse = await axiosInstance.post('/api/reviews',review);
            const savedReview = reviewSaveResponse.data;
            console.log('Saved review response ',savedReview);
            redirectUrl=`/movies/${review.movie}`;
        }
        catch(e)
        {
            redirectUrl=`/movies/${review.movie}`;
            console.log('Error ',e);

        }
        finally {
            revalidatePath(redirectUrl);
        }

    }
}
export async function updateReviewAction( formData:FormData)
{
    console.log('Update review action ');
    const reviewFormData = Object.fromEntries(formData);
    const validateReviewFormData = reviewUpdateSchema.safeParse(reviewFormData);

    if(!validateReviewFormData.success)
    {
        console.log('Error ',validateReviewFormData.error)
        const formFieldErrors = validateReviewFormData.error.flatten().fieldErrors;
        return {
            errors: {
                _id:formFieldErrors?._id,
                movie: formFieldErrors?.movie,
                rating: formFieldErrors?.rating,
                review: formFieldErrors?.review,

            },
        };
    }
    else
    {
        console.log('Update review');
        //Save movies
        let redirectUrl = '';
        let review = {
            _id:formData.get('_id'),
            movie:formData.get('movie'),
            rating:formData.get('rating'),
            review :formData.get('review')
        }
        try {
            const reviewUpdatResponse = await axiosInstance.put(`/api/reviews/${review._id}`,review);
            const updateReview = reviewUpdatResponse.data;
            console.log('Saved review response ',updateReview);
            redirectUrl=`/movies/${review.movie}`;
        }
        catch(e)
        {
            redirectUrl=`/movies/${review.movie}`;
            console.log('Error ',e);
            return e;
        }
        finally {
            revalidatePath(redirectUrl);
        }

    }
}
export async function deleteReviewAction( review:Review)
{
    let redirectUrl = '';
    try {
        const deleteReviewResponse = await axiosInstance.delete(`/api/reviews/${review._id}`);
        const deletedReview = deleteReviewResponse.data;
        console.log('Deleted review response ',deletedReview);
        redirectUrl=`/movies/${review.movie}`;
    }
    catch(e)
    {
        redirectUrl=`/movies/${review.movie}`;
        console.log('Error ',e);

    }
    finally {
        revalidatePath(redirectUrl);
    }
}
