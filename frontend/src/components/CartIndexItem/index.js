import { deleteCartItem } from "../../store/cartItems";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateCartItem } from "../../store/cartItems";
import { useSelector } from "react-redux";
import { getProduct } from "../../store/products";
import "./CartIndexItem.css"

export default function CartIndexItem({cartItem}) {

    const dispatch = useDispatch();
    const [size, setSize] = useState(cartItem.options)
    const [quantity, setQuantity] = useState(cartItem.quantity) 
    const product = useSelector(getProduct(cartItem.productId))
    const handleQuantityChange = (e) => {
        const newQuantity = e.target.value;
        setQuantity(newQuantity)

        const newCartQuantity = {
            id: cartItem.id,
            product_id: cartItem.product_id,
            options: cartItem.options,
            quantity: newQuantity
    }

    dispatch(updateCartItem(newCartQuantity))
}

    const handleSizeChange = (e) => {
        const newSize = e.target.value;
        setSize(newSize)

        const newCartSize = {
            id: cartItem.id,
            product_id: cartItem.product_id,
            options: size,
            quantity: cartItem.quantity
    }

    dispatch(updateCartItem(newCartSize))
}

    if (!cartItem) return null;
    return (
        <div className="cart-item">
        {console.log(product)}
            <h1>{product.name} </h1>
            <h2>{product.category}</h2>
            <h3>{product.color}</h3>
            <h3>{product.price}</h3>
            <label> Size </label>
            <select onChange={handleSizeChange}>
                <option value="6">6</option>
                <option value="6.5">6.5</option>
                <option value="7">7</option>
                <option value="7.5">7.5</option>
                <option value="8">8</option>
                <option value="8.5">8.5</option>
                <option value="9">9</option>
                <option value="9.5">9.5</option>
                <option value="10">10</option>
                <option value="10.5">10.5</option>
                <option value="11">11</option>
                <option value="11.5">11.5</option>
                <option value="12">12</option>
                <option value="12.5">12.5</option>
                <option value="13">13</option>
                <option value="14">14</option>
            </select>
            <br></br>
            <label> Quantity:</label>
            <input type="number" onChange={handleQuantityChange} value={quantity} />

            <br></br>

<button id="delete-cart-item-button" onClick={ () => dispatch(deleteCartItem(cartItem.id)) }> Delete </button>
        </div>
    )
}