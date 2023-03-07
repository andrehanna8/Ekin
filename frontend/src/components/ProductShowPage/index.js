import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, getProduct } from "../../store/products";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { createCartItem } from "../../store/cartItems";
import "./ProductShowPage.css";
import ReviewsIndex from "../ReviewsIndex";
import { createReview, fetchReview, updateReview } from "../../store/reviews";
import { useHistory } from "react-router-dom";

export default function ProductShowPage() {
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch()
    const {productId} = useParams()

    const reviews = useSelector(state => Object.values(state.reviews))
    const product = useSelector(getProduct(productId))//wrong 
    const [size, setSize] = useState("")
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [rating, setRating] = useState(0)
    
    useEffect(() => {
        dispatch(fetchProduct(productId))
    },[])

    const handleReviewSubmit = (e) => {
        e.preventDefault()

        const review = {
            title: title,
            body: body,
            rating: rating,
            product_id: productId
        }
        dispatch(createReview(review))
    }

    const shapeItem = (e) => {
        const cartItem = {
            product_id: productId,
            options: size,
            quantity: 1
        }
        dispatch(createCartItem(cartItem))
    }


    return  product ?  (
        <div className="product-show-page"> 
            <div className="image-container">
                <img src="https://i.pinimg.com/600x315/cb/9a/0b/cb9a0bd78fbf6ff2c39d0c9c9f40443e.jpg" />
            </div>

            <div className="product-info">
                <h1>{product.name}</h1>
                <h3>{product.category}</h3>
                <h3>{product.price}$ </h3>
                <br></br>
                <br></br>
                <br></br>
                    <p> Select Size</p>
                    <div className="size-buttons">
                        
                        <button onClick={(e) => setSize(6)}>6</button>
                        <button onClick={(e) => setSize(6.5)}>6.5</button>
                        <button onClick={(e) => setSize(7)}>7</button>
                        <button onClick={(e) => setSize(7.5)}>7.5</button>
                        <button onClick={(e) => setSize(8)}>8</button>
                        <button onClick={(e) => setSize(8.5)}>8.5</button>
                        <button onClick={(e) => setSize(9)}>9</button>
                        <button onClick={(e) => setSize(9.5)}>9.5</button>
                        <button onClick={(e) => setSize(10)}>10</button>
                        <button onClick={(e) => setSize(10.5)}>10.5</button>
                        <button onClick={(e) => setSize(11)}>11</button>
                        <button onClick={(e) => setSize(11.5)}>11.5</button>
                        <button onClick={(e) => setSize(12)}>12</button>
                        <button onClick={(e) => setSize(12.5)}>12.5</button>
                        <button onClick={(e) => setSize(13)}>13</button>
                        <button onClick={(e) => setSize(14)}>14</button>


                    </div>
                    <br></br>
                    <div className="add-favorite-show-page-buttons"> 
                        <div className="add-to-bag-button">
                            <button  type="radio" onClick={shapeItem}>Add to Bag</button>
                        </div>
                        <br></br>

                        <div className="favorite-button">
                            <button id="fav-button" type="radio">Favorite &nbsp;&nbsp; <span id="fav-emoji"> &#9825; </span>  </button>
                        </div>
                    </div>
                    <br></br>
                    <h3> Free Shipping*</h3>

                    <h2>{product.description}</h2>

                    <br></br>
                    <h5>Reviews</h5>
                    <ReviewsIndex />
                    <br></br>

                    <form className="create-review">
                        <h5>Write a Review</h5>
                        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <input type="text" placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} />
                        <input type="number" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
                        <button type="submit" onClick={handleReviewSubmit} >Submit</button>
                    </form>
                    <br></br>

            </div>
        </div>
    ) : null
}