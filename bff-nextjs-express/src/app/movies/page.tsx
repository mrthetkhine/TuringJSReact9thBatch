import axiosInstance from "../axiosInstance";

export default async function page()
{
    let movies = [];
    try {
        //await new Promise((resolve,reject)=>setTimeout(resolve(),5000));
        const moviesResponse = await axiosInstance.get('/api/movies');
        movies = moviesResponse.data;
    }
    catch (err)
    {
        movies=[];
    }

    return (<div>
        Movies
        {
            movies && movies.map(movie=><div key={movie._id}>
                {movie.title}
            </div>)
        }
    </div>);
}