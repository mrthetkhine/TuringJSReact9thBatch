import {Modal} from "react-bootstrap";
import ReviewForm from "@/app/movies/[id]/ReviewForm";

export default function ReviewFormDialog({movieId,show,handleClose}:
                                             {
                                                 movieId:string,
                                                 show:boolean,
                                                 handleClose:()=>void,

                                             })
{
    return(<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>New Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ReviewForm handleClose={handleClose} movieId={movieId}/>

        </Modal.Body>
    </Modal>);
}