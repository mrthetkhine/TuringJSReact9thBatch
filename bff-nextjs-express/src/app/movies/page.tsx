import axiosInstance from "../axiosInstance";
import {Metadata} from "next";
import MovieUI from "../components/MovieUI";

export default async function page()
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

        {
            movies && movies.map(movie=><MovieUI movie={movie} key={movie._id}/>)
        }
    </div>);
}
export const metadata: Metadata = {
    title: "Movies",
    description: "Movies page",
};