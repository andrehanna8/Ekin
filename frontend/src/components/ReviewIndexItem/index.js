import "./ReviewIndexItem.css"
import { useDispatch } from "react-redux"
import { deleteReview, updateReview } from "../../store/reviews"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useState } from "react"



export default function ReviewIndexItem({review}) {
    const currentUser = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [rating, setRating] = useState(0)

    const handleDelete = () => {
        dispatch(deleteReview(review.id))
    }

    const showEditForm = () => {
        const handleEdit = (e) => {
            e.preventDefault()
            const review = {
                title: title,
                body: body,
                rating: rating,
                product_id: review.productId
            }
            dispatch(updateReview(review))
        }
        

        if (currentUser.id === review.userId) {
            return (
            <div className="edit-review-form-div"> 
                <form className="edit-review-form">
                    <input type="text" placeholder="title" />
                    <input type="text" placeholder="body" />
                    <input type="number" placeholder="rating" />
                    <button type="submit" onClick={handleEdit}>Edit</button>
                </form>
            </div>
        ) 
            } else {
            return null
        }
    }

    if (currentUser.id === review.userId) {
        return (
            
                <div className="review-index-item">
                    <h4> {review.title}</h4>
                    <p> {review.body} </p>
                    <p> {review.rating} </p>
    
                    <button className="delete-review" onClick={handleDelete} >Delete</button>
                    <button className="edit-review" onClick={showEditForm} >Edit</button>
                </div>
        )
    } else {
        return (
            <div className="review-index-item">
                <h4> {review.title}</h4>
                <p> {review.body} </p>
                <p> {review.rating} </p>
            </div>
        )
    }
}