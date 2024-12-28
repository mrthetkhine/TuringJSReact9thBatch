import axiosInstance from "../axiosInstance";
import {Metadata} from "next";
import MovieUI from "../components/MovieUI";
import Link from "next/link";
import NewMovieForm from "../components/NewMovieForm";
import MovieItem from "../components/MovieItem";

export default async function Page()
{
    let movies = [];
    try {
        const moviesResponse = await axiosInstance.get('/api/movies');
        movies = moviesResponse.data;
    }
    catch (err)
    {
        movies=[];
    }

    return (<div>
        <NewMovieForm/>
        <div>
        {

            movies && movies.map(movie=><MovieItem movie={movie} key={movie._id}/>)
        }
        </div>
    </div>);
}
export const metadata: Metadata = {
    title: "Movies",
    description: "Movies page",
};