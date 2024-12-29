import {Modal} from "react-bootstrap";
import ReviewForm from "./ReviewForm";
import Review from "../../../../types/review";

export default function ReviewFormDialog({
                                             movieId,
                                             show,
                                             handleClose,
                                                reviewToEdit}:
                                             {
                                                 movieId:string,
                                                 show:boolean,
                                                 handleClose:()=>void,
                                                 reviewToEdit?:Review,

                                             })
{
    return(<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{reviewToEdit?'Update':'New Review'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ReviewForm handleClose={handleClose} movieId={movieId} reviewToEdit={reviewToEdit}/>

        </Modal.Body>
    </Modal>);
}