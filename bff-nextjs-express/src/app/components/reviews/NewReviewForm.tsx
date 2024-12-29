'use client';
import ReviewFormDialog from "./ReviewFormDialog";
import {useState} from "react";

export default function NewReviewForm({movieId}:{movieId:string})
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
        <button type={"button"} className={"btn btn-primary"} onClick={handleOpen}>
            New Review
        </button>
        <ReviewFormDialog show={show} handleClose={handleClose} movieId={movieId}/>
    </div>);
}