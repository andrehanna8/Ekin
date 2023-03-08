import { useSelector, useDispatch } from "react-redux"
import ReviewIndexItem from "../ReviewIndexItem"
import "./ReviewsIndex.css"

// rootreducer takes care setting up the whole state of the application
export default function ReviewsIndex() {
    const reviews = useSelector(state => Object.values(state.reviews))
    // const {productId} = useParams()

    return (
        <>
            <div className="reviews-dropdown" >
                {reviews.map( review => ( <ReviewIndexItem review={review}/> ))}
            </div>
        </>
    )
}
// FLOW OF DATA -->
//reducer, useeffect, thunkaction, controller in backend, jbuilder, goes back and dispatches to thunk, render
