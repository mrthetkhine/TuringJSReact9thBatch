'use client';
import Movie from "../../../../types/movie";
import {useRouter} from "next/navigation";
import Swal from "sweetalert2";
import {deleteMovieAction} from "../../actions/movieAction";
import MovieUI from "./MovieUI";
import styles from "./MovieItem.module.css";

export default function MovieItem({movie}:{movie:Movie})
{
    const router = useRouter();
    const onClick = ()=>{
        console.log('Click delete');
        Swal.fire({
            title: "Do you want to delete movie?",
            showCancelButton: true,
            confirmButtonText: "Delete",

        }).then((result) => {
            if (result.isConfirmed) {

                deleteMovieAction(movie._id).then(data=>{
                    console.log('Delete result ',data);
                    Swal.fire("Delete!", "", "success");
                },err=>{
                    console.log('Delete error ',err);
                });
                //console.log('Call Delete action');
            }
        });
    };
    const btnDetailsHandler = ()=>{
        console.log('Btn Details handler ');
        router.push(`/movies/${movie._id}`);
    };
    return(<div className={styles['movie-container']}>
        <MovieUI movie={movie}/>
        <button type={"button"} className={"btn btn-primary"} onClick={onClick}>Delete</button>
        &nbsp;
        <button type={"button"} className={"btn btn-primary"} onClick={btnDetailsHandler}>Details</button>
    </div>)
}