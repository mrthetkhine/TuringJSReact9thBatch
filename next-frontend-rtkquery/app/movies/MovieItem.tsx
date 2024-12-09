import Movie from "@/types/movie";
import styles from './MovieUI.module.css';
import Image from "next/image";
import {useRouter} from "next/navigation";
import MovieUI from "@/app/movies/MovieUI";

export default function MovieItem({movie}:{movie:Movie})
{
    const router = useRouter();
    const btnDetailsHandler =()=>{
        console.log('btn details');
        router.push(`/movies/${movie._id}`);
    };
    return(<div className={styles['movie-container']}>
        <MovieUI movie={movie}/>
        <div>
            <button type={"button"} className={"btn btn-primary"} onClick={btnDetailsHandler}>Details</button>
        </div>

    </div>);
}