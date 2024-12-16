import Movie from "@/types/movie";
import styles from './MovieUI.module.css';
import Image from "next/image";
import Swal from 'sweetalert2'
import {useRouter} from "next/navigation";
import MovieUI from "@/app/movies/MovieUI";
import {useState} from "react";
import MovieFormDialog from "@/app/movies/MovieFormDialog";
import {useDeleteMovieMutation} from "@/lib/features/movies/movieApiSlice";

export default function MovieItem({movie}:{movie:Movie})
{
    const [deleteApi,deleteResult] = useDeleteMovieMutation();
    const router = useRouter();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const btnDetailsHandler =()=>{
        console.log('btn details');
        router.push(`/movies/${movie._id}`);
    };
    const btnShowDeleteModal =()=>{
        console.log('Delete Handler');
        Swal.fire({
            title: "Do you want to delete movie?",
            showCancelButton: true,
            confirmButtonText: "Delete",

        }).then((result) => {
            if (result.isConfirmed) {
                deleteApi(movie)
                    .unwrap()
                    .then(data=>{
                        Swal.fire("Delete!", "", "success");
                    },error=>console.log('Delete error ',error))

            }
        });
    };

    return(<div className={styles['movie-container']}>
        <MovieFormDialog show={show}
                         handleClose={handleClose}
                         movieToEdit={movie}   />
        <MovieUI movie={movie}/>
        <div>
            <button type={"button"} className={"btn btn-primary"} onClick={handleShow}>Edit</button>
            &nbsp;
            <button type={"button"} className={"btn btn-primary"} onClick={btnShowDeleteModal}>Delete</button>
            &nbsp;
            <button type={"button"} className={"btn btn-primary"} onClick={btnDetailsHandler}>Details</button>
        </div>


    </div>);
}