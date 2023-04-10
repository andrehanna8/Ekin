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
import LoginFormPage from "../LoginFormPage";
import { useMemo } from "react";

const getSalePrice = (price) => {
    return (price * 0.6).toFixed(2);
  };

export default function ProductShowPage() {
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch()
    const {productId} = useParams()
    const currentUser = useSelector(state => state.session.user)
    const reviews = useSelector(state => Object.values(state.reviews))
    const product = useSelector(getProduct(productId))
    const [size, setSize] = useState("")
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [rating, setRating] = useState(1)
    const [showReviewIndex, setShowReviewIndex] = useState(false)
    const [showReviewForm, setShowReviewForm] = useState(false)
    const [selectedSize, setSelectedSize] = useState("");
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showBanner, setShowBanner] = useState(false);
    const [bannerTimeoutId, setBannerTimeoutId] = useState(null);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [titleError, setTitleError] = useState("");
    const [bodyError, setBodyError] = useState("");
    const [ratingError, setRatingError] = useState("");

    const isOnSale = useMemo(() => product?.category.includes("Sale"), [product]);
const categoryName = useMemo(() => {
  if (isOnSale) {
    return product?.category.replace("Sale ", "");
  }
  return product?.category;
}, [product, isOnSale]);
  
const displayPrice = product && (isOnSale ? getSalePrice(product.price) : product.price);


const showSuccessBanner = () => {
    setShowBanner(true);
    setLoadingProgress(0);
  
    const timeoutId = setTimeout(() => {
      setShowBanner(false);
    }, 5000);
  
    setBannerTimeoutId(timeoutId);
  
    const intervalId = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        return prevProgress >= 100 ? 100 : prevProgress + 1;
      });
    }, 50);
  
    setTimeout(() => {
      clearInterval(intervalId);
    }, 5000);
  };
  


    const handleSizeClick = (newSize) => {
        setSize(newSize);
        setSelectedSize(newSize);
      };



    useEffect(() => {
        dispatch(fetchProduct(productId))
    },[])

    const toggleShowReviewIndex = () => {
        setShowReviewIndex(!showReviewIndex)
    }

    const toggleShowReviewForm = () => {
        setShowReviewForm(!showReviewForm)
    }

    const validateReview = () => {
        let hasErrors = false;
        if (title.trim() === "") {
            setTitleError("Title is required");
            hasErrors = true;
        } else {
            setTitleError("");
        }
        if (body.trim() === "") {
            setBodyError("Body is required");
            hasErrors = true;
        } else {
            setBodyError("");
        }
        if (rating === 0 || rating > 5 || rating < 1) {
            setRatingError("Rating must be between 1 and 5");
            hasErrors = true;
        } else {
            setRatingError("");
        }
        return hasErrors;
    };
    

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const hasErrors = validateReview();
        if (hasErrors) {
            setShowReviewIndex(false)
            return;
        } else {
            setShowReviewIndex(true)
        }

        if (!currentUser) {
            const signUpButton = document.getElementById('sign-up');
            signUpButton?.click();
        }
        
        const review = {
            title: title,
            body: body,
            rating: rating,
            product_id: productId
        }
        dispatch(createReview(review))

        setTitle("")
        setBody("")
        setRating(0)
        
    }

    const shapeItem = (e) => {
        e.preventDefault();
    
        if (!currentUser) {
            const signUpButton = document.getElementById('sign-up');
            signUpButton?.click();
        }
    
        const cartItem = {
            product_id: productId,
            options: size,
            quantity: 1
        };
        dispatch(createCartItem(cartItem));
        if (currentUser) {
            showSuccessBanner();
        }
    };
    

    const closeBanner = () => {
        setShowBanner(false);
        clearTimeout(bannerTimeoutId);
      };

      const renderSizeButtons = () => {
        if (product.category.includes("Shoes")) {
            return (
                <>
                    {Array.from({ length: 17 }, (_, i) => i * 0.5 + 6).map((size) => (
                        <button
                            key={size}
                            style={
                                selectedSize === size
                                    ? { border: "1px solid #111" }
                                    : { border: "#dcd8d8 solid 1px" }
                            }
                            onClick={() => handleSizeClick(size)}
                        >
                            {size}
                        </button>
                    ))}
                </>
            );
        } else if (product.category.includes("Accessories")) {
            return (
                <button
                    style={
                        selectedSize === "OS"
                            ? { border: "1px solid #111" }
                            : { border: "#dcd8d8 solid 1px" }
                    }
                    onClick={() => handleSizeClick("OS")}
                >
                    OS
                </button>
            );
        } else if (product.category.includes("Tops") || product.category.includes("Bottoms")) {
            return (
                <>
                    {["XS", "S", "M", "L", "XL", "XXL", "XXXL"].map((size) => (
                        <button
                            key={size}
                            style={
                                selectedSize === size
                                    ? { border: "1px solid #111" }
                                    : { border: "#dcd8d8 solid 1px" }
                            }
                            onClick={() => handleSizeClick(size)}
                        >
                            {size}
                        </button>
                    ))}
                </>
            );
        }
    };

      

    return  product ?  (
        <div className="product-show-page"> 
        {showBanner && (
        <div className="banner">
            <span>Product successfully added to cart! &nbsp; &nbsp; </span>
            <div className="loading-bar" style={{ width: `${loadingProgress}%` }}></div>
            <button id="close-banner" onClick={closeBanner}>X</button>
        </div>
        )}

            <div className="image-container">
                <img src={product.photoUrl} />
            </div>

            <div className="product-info">
        <h1>{product.name}</h1>
        <h3>{categoryName}</h3>
        <h3>
          {isOnSale ? (
            <>
              <span id="sale-price" style={{ textDecoration: "line-through" }}> 
                ${product.price} 
              </span>&nbsp;
              ${displayPrice}
            </>
          ) : (
            `\$${product.price}`
          )}
        </h3>
                <br></br>
                <br></br>
                <br></br>
                    <p> Select Size</p>
                    <div className="size-buttons">
                        {renderSizeButtons()}
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

                    <h2>{product.description}</h2>
                    <div id="breakline"></div>

                    <h3> Free Shipping & Returns</h3>
                    <div id="breakline"></div>
                    <button id="review-button" onClick={toggleShowReviewIndex}> <h5>Reviews&nbsp;({reviews.length}) <span id="v">╲╱</span> </h5> </button>
                    <div id="breakline"></div>
                    
                    { showReviewIndex && <ReviewsIndex />}
                    <br></br>
                    {errors.length > 0 && (
                <div className="errors">
                    <ul>
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}

<form className="create-review">
    <h5>Write a Review</h5>
    {titleError && (
        <div style={{ color: "red" }}>{titleError}</div>
    )}
    <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
    {bodyError && (
        <div style={{ color: "red" }}>{bodyError}</div>
    )}
    <input type="text" placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} />
    {ratingError && (
        <div style={{ color: "red" }}>{ratingError}</div>
    )}
    <input type="number" placeholder="Rating" value={rating} max="5" min="1" onChange={(e) => setRating(Math.min(e.target.value, 5))} />
    <button type="submit" onClick={handleReviewSubmit}>Submit</button>
</form>

                    <br></br>

            </div>
            {showLoginForm && (
    <LoginFormPage setShowLoginForm={setShowLoginForm} />
)}

        </div>
    ) : null
}