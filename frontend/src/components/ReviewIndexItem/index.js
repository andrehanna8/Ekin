import "./ReviewIndexItem.css"
import { useDispatch } from "react-redux"
import { deleteReview, updateReview } from "../../store/reviews"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useState } from "react"

export default function ReviewIndexItem({review}) {
    const currentUser = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const [showEditForm, setShowEditForm] = useState(false)
    const [title, setTitle] = useState(review.title)
    const [body, setBody] = useState(review.body)
    const [rating, setRating] = useState(review.rating)
    const [errorMessage, setErrorMessage] = useState(""); // Add this line
    // const reviewAuthor = useSelector(state => state.users[review.userId])

    const handleDelete = () => {
        dispatch(deleteReview(review.id))
    }

    const handleEdit = (e) => {
        e.preventDefault();
        if (!title || !body || !rating) {
          setErrorMessage("Please fill out all fields"); // Set the error message
          return;
        }
        setErrorMessage(""); // Clear the error message
        const editedReview = {
          id: review.id,
          title: title,
          body: body,
          rating: rating,
          product_id: review.productId,
        };
        dispatch(updateReview(editedReview));
        setShowEditForm(false);
      };
    

    const starRating = (rating) => {
        const maxRating = 5
        const fullStars = Math.floor(rating)
        const emptyStars = maxRating - fullStars
        const halfStar = (rating - fullStars) >= 0.5 ? 1 : 0
        const stars = []
        for (let i = 0; i < fullStars; i++) {
            stars.push(<i className="fas fa-star" key={`full-${i}`} />)
        }
        if (halfStar) {
            stars.push(<i className="fas fa-star-half-alt" key="half" />)
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<i className="far fa-star" key={`empty-${i}`} />)
        }
        return stars
    }
    if (currentUser && currentUser.id === review.userId) {
        return (
            <div className="review-index-item">
                {showEditForm ? (
                    <div className="edit-review-form-div">
                        <form className="edit-review-form">
                            <h1>Edit Review</h1>
                            <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                            <input type="text" placeholder="body" value={body} onChange={(e) => setBody(e.target.value)} />
                            <input type="number" placeholder="rating" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />
                            <div className="star-rating">{starRating(rating)}</div>
                            <button type="submit" onClick={handleEdit}>Edit</button>
                            <button type="button" onClick={() => setShowEditForm(false)}>Cancel</button>
                            {errorMessage && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  {errorMessage}
                </p>
              )}
                        </form>
                    </div>
                ) : (
                    <>
                        <h4>{review.title}</h4>
                        <br></br>
                        <div className="star-rating">{starRating(review.rating)}</div>
                        <br></br>
                        <p>{review.body}</p>
                        <br></br>
                        <button className="delete-review" onClick={handleDelete}>Delete</button>
                        <button className="edit-review" onClick={() => setShowEditForm(true)}>Edit</button>
                    <div id="mini-breakline"></div>

                    </>
                )}
            </div>
        )
    } else {
        return (
            <div className="review-index-item">
                {/* <h4>{reviewAuthor.name}</h4> */}

                <h4>{review.title}</h4>
                <br></br>
                <div className="star-rating">{starRating(review.rating)}</div>
                <br></br>
                <p>{review.body}</p>
                <br></br>
                <div id="mini-breakline"></div>

            </div>
        )
    }
}
