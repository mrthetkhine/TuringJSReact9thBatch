'use client'
import Link from "next/link";
import {useState} from "react";
import MovieFormDialog from "./MovieFormDialog";
import styles from './NewMovieForm.module.css';
export default function NewMovieForm()
{
    const [show,setShow] = useState(false);
    const handleClose =()=>{
        setShow(false);
    }
    const handleOpen = ()=>{
        setShow(true);
    }
    const btnNewHandler =()=>{
        console.log('Btn new handler');
        handleOpen();
    };

    return(<div>
        <div className={styles['new-movie-container']}>
            <button type={"button"} className={"btn btn-primary"} onClick={btnNewHandler}>
                New
            </button>
        </div>

        <MovieFormDialog show={show} handleClose={handleClose}/>
    </div>);
}