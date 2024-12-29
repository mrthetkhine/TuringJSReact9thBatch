'use client'
import {useState} from "react";
import MovieFormDialog from "./MovieFormDialog";
import Movie from "../../../../types/movie";

export default function MovieEditForm({movie}:{movie:Movie})
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
   return(
       <div>
           <button type={"button"} className={"btn btn-primary"} onClick={handleOpen}>Edit</button>
           <MovieFormDialog show={show} handleClose={handleClose} movieToEdit={movie}/>
       </div>
       )
}