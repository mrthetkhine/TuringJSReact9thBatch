import axiosInstance from "../../axiosInstance";
import Movie from "../../../../types/movie";
import styles from "./page.module.css";

import MovieUI from "../../components/movie/MovieUI";
import {useState} from "react";
import NewMovieForm from "../../components/movie/NewMovieForm";
import MovieFormDialog from "../../components/movie/MovieFormDialog";
import MovieEditForm from "../../components/movie/MovieEditForm";
import {useRouter} from "next/navigation";
import Link from "next/link";
import MovieReviews from "../../components/reviews/MovieReviews";

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
        <Link
            className={`btn btn-primary`}
            href="/movies"
        >
            Back
        </Link>
        <div className={styles['details-container']}>
            <MovieUI movie={movie}/>
            <MovieEditForm movie={movie}/>
            <MovieReviews movie={movie}/>
        </div>

    </div>);
}