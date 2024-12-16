import Movie from "@/types/movie";
import Image from "next/image";
import styles from "@/app/movies/MovieUI.module.css";
import DirectorUI from "@/app/movies/DirectorUI";

export default function MovieUI({movie}:{movie:Movie}) {
    return <>
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
    </>;
}