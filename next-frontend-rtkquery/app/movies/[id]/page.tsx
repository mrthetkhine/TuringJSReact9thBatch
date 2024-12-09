"use client";
import { use } from "react";
import './movie-details.css';
import Movie from "@/types/movie";
import MovieUI from "@/app/movies/MovieUI";
import Link from "next/link";
import Review from "@/types/review";
import ReviewUI from "@/app/movies/[id]/ReviewUI";

const movie:Movie ={
        "_id": "6756efc1e11e003172007abd",
        "title": "Titnaic",
        "director": {
            "name": "Jame Cameron",
            "phoneNo": "09993",
            "_id": "6756efc1e11e003172007abe"
        },
        "year": 2010,

};
const reviews:Review[] = [
        {

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

]
export default function MovieDetails({ params }: { params: Promise<{ id: string }> })
{
    const { id } = use(params);
    return (<div >
        <Link
            className={`btn btn-primary`}
            href="/movies"
        >
            Back
        </Link>
        <div className={'movie-details-container'}>

            <MovieUI movie={movie}/>
            {
                reviews.map(review=><ReviewUI review={review} key={review._id}/>)
            }
        </div>


    </div>);
}