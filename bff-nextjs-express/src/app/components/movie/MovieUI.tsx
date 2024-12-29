'use client';
import Image from "next/image";
import Swal from 'sweetalert2'
import {useRouter} from "next/navigation";

import styles from "./MovieUI.module.css";
import Movie from "../../../../types/movie";
import DirectorUI from "./DirectorUI";
import {deleteMovieAction} from "../../actions/movieAction";

export default function MovieUI({movie}:{movie:Movie}) {

    return <div >
        <Image
            src={"https://m.media-amazon.com/images/M/MV5BMTk3MjE5NDctOWJkMS00YzA0LTg0NTEtM2IzY2Q2MGZlODYwXkEyXkFqcGc@._V1_QL75_UX1640_.jpg"}
            width={150} height={200} alt={"Movie poster"} className={styles.poster}/>
        <div className={styles.info}>
            <h3>Title {movie.title}</h3>
            <div>Year {movie.year}</div>
            {
                movie.director && <DirectorUI director={movie.director}/>
            }
        </div>

    </div>;
}