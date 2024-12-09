'use client';

import Movie from "@/types/movie";
import MovieItem from "@/app/movies/MovieItem";


const movies:Movie[]=[
    {
        "_id": "6756efc1e11e003172007abd",
        "title": "Titnaic",
        "director": {
            "name": "Jame Cameron",
            "phoneNo": "09993",
            "_id": "6756efc1e11e003172007abe"
        },
        "year": 2010,

    },
    {
        "_id": "6756efc8e11e003172007ac0",
        "title": "Avata",
        "director": {
            "name": "Jame Cameron",
            "phoneNo": "09993",
            "_id": "6756efc8e11e003172007ac1"
        },
        "year": 2010,

    }
]
export default function MoviesPage()
{
    const btnNewHandler = ()=>{
      console.log('New Movie');
    };

    return (<div>

        <button type={"button"} className={"btn btn-primary"} onClick={btnNewHandler}>New</button>
        <div>
            {
                movies.map(movie=><MovieItem key={movie._id} movie={movie}/>)
            }
        </div>

    </div>);
}