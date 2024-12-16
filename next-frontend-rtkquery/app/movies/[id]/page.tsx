"use client";
import {use, useState} from "react";
import './movie-details.css';
import Movie from "@/types/movie";
import MovieUI from "@/app/movies/MovieUI";
import Link from "next/link";
import Review from "@/types/review";
import ReviewUI from "@/app/movies/[id]/ReviewUI";
import {useGetAllMoviesQuery} from "@/lib/features/movies/movieApiSlice";
import {useGetAllReviewByMovieIdQuery} from "@/lib/features/review/reviewApiSlice";
import Loading from "@/app/loading";
import ReviewFormDialog from "@/app/movies/[id]/ReviewFormDialog";
import IsAuth from "@/app/components/auth/IsAuth";

/*const movie:Movie ={
        "_id": "6756efc1e11e003172007abd",
        "title": "Titnaic",
        "director": {
            "name": "Jame Cameron",
            "phoneNo": "09993",
            "_id": "6756efc1e11e003172007abe"
        },
        "year": 2010,

};*/
const reviews:Review[] = [
        /*{

            "_id": "6757016ee11e003172007ac6",
            "movie": "6756efc1e11e003172007abd",
            "rating": 5,
            "review": "first review for avatar 1",

        },
        {
            "_id": "67570172e11e003172007ac9",
            "movie": "6756efc1e11e003172007abd",
            "rating": 5,
            "review": "second review for avatar 1",

        },
        {
            "_id": "67570178e11e003172007acc",
            "movie": "6756efc1e11e003172007abd",
            "rating": 3,
            "review": "third review for avatar 1",

        }
*/
]
function MovieDetails({ params }: { params: Promise<{ id: string }> })
{
    const { id } = use(params);
    const { movie } = useGetAllMoviesQuery(undefined, {
        selectFromResult: ({ data }) => ({
            movie: data?.find((item) => item._id === id),
        }),
    })
    const { data, isError, isLoading, isSuccess,refetch } = useGetAllReviewByMovieIdQuery(id,{});

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const btnNewReviewHandler =()=>{
      console.log('btn new Review');
    };
    return (<div >
        <Link
            className={`btn btn-primary`}
            href="/movies"
        >
            Back
        </Link>
        <div className={'movie-details-container'}>

            <MovieUI movie={movie??{}as Movie}/>
            <div>
                <button type={"button"}
                        className={"btn btn-primary"}
                        onClick={handleShow}>New Review</button>
                <ReviewFormDialog show={show} handleClose={handleClose} movieId={movie?._id??''}/>
            </div>

            &nbsp;
            {
                isLoading && <Loading/>
            }
            {
                isSuccess && data && data.map(review=><ReviewUI review={review} key={review._id}/>)
            }
        </div>


    </div>);
}
export default IsAuth(MovieDetails);