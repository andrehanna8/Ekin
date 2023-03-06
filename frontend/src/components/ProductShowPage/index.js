import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, getProduct } from "../../store/products";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { createCartItem } from "../../store/cartItems";

export default function ProductShowPage() {
    const dispatch = useDispatch()
    const {productId} = useParams()
    const product = useSelector(getProduct(productId))
    
    const [size, setSize] = useState("")

    
    useEffect(() => {
        dispatch(fetchProduct(productId))
    },[])

    const shapeItem = (e) => {
        const cartItem = {
            product_id: productId,
            options: size,
            quantity: 1
        }
        console.log(cartItem)
        dispatch(createCartItem(cartItem))
    }


    return (
        <div className="product-show-page"> 
            <div className="image-container">
                <img src="https://i.pinimg.com/600x315/cb/9a/0b/cb9a0bd78fbf6ff2c39d0c9c9f40443e.jpg" />
            </div>

            <div className="product-info">
                <h1>{product.name}</h1>
                <br></br>
                <h3>{product.price}$ </h3>
                    
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
                            <button type="radio" onClick={shapeItem}>Add to Bag</button>
                        </div>
                        <br></br>

                        <div className="favorite-button">
                            <button type="radio">Favorite</button>
                        </div>
                    </div>
                    <br></br>

                    <h2>{product.description}</h2>
                    <br></br>

            </div>
        </div>
    )
}