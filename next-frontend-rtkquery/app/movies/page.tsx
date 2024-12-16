'use client';

import Movie from "@/types/movie";
import MovieItem from "@/app/movies/MovieItem";
import {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import MovieFormDialog from "@/app/movies/MovieFormDialog";
import {useGetAllMoviesQuery} from "@/lib/features/movies/movieApiSlice";
import Loading from "@/app/loading";
import IsAuth from "@/app/components/auth/IsAuth";


const movies:Movie[]=[
   /* {
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

    }*/
]
function MoviesPage()
{
    const { data, isError, isLoading, isSuccess,refetch } = useGetAllMoviesQuery(undefined,{

    });

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const btnNewHandler = ()=>{
      console.log('New Movie');

    };

    return (<div>

        <button type={"button"} className={"btn btn-primary"} onClick={handleShow}>New</button>
        <MovieFormDialog show={show} handleClose={handleClose}/>

        <div>
            {
                isLoading && <Loading/>
            }
            {
                isSuccess && data.map(movie=><MovieItem key={movie._id} movie={movie}/>)
            }
        </div>

    </div>);
}
export default IsAuth(MoviesPage);