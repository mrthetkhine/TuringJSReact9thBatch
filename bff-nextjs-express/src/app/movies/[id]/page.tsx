import axiosInstance from "../../axiosInstance";
import Movie from "../../../../types/movie";
import styles from "./page.module.css";

import MovieUI from "../../components/MovieUI";

export default async function page({params}: { params: Promise<{ id: string }> }) {
    let {id} = await params;
    console.log('Id ',id);
    let movie: Movie;
    try {
        const moviesResponse = await axiosInstance.get(`/api/movies/${id}`);
        movie = moviesResponse.data;
    } catch (err) {
        movie = {};
    }
    return (<div>
        <div className={styles['details-container']}>
            <MovieUI movie={movie}/>
        </div>

    </div>);
}