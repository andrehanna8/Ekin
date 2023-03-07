import "./ReviewIndexItem.css"
import { useDispatch } from "react-redux"
import { deleteReview, updateReview } from "../../store/reviews"


export default function ReviewIndexItem({review}) {
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteReview(review.id))
    }

    const handleEdit = () => {
        return(
            <div className="edit-review-form-div"> 
                <form className="edit-review-form">
                    <input type="text" placeholder="title" />
                    <input type="text" placeholder="body" />
                    <input type="number" placeholder="rating" />
                    <button type="submit">Edit</button>
                </form>
            </div>
        )
    }

    return (
        
            <div className="review-index-item">
                <h4> {review.title}</h4>
                <p> {review.body} </p>
                <p> {review.rating} </p>
                <button className="delete-review" onClick={handleDelete} >Delete</button>
                <button className="edit-review" onClick={handleEdit} >Edit</button>
            </div>
        
    
    )
}