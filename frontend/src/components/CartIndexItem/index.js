import { deleteCartItem } from "../../store/cartItems";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateCartItem } from "../../store/cartItems";
import { useSelector } from "react-redux";
import { getProduct } from "../../store/products";
import "./CartIndexItem.css"
import { Link } from "react-router-dom";
import '../CartIndexItem/trashparent.png'
import { useEffect } from "react";
import { fetchProduct } from "../../store/products";
import { useMemo } from "react";

export default function CartIndexItem({cartItem}) {

    const dispatch = useDispatch();
    const [size, setSize] = useState(cartItem.options)
    const [quantity, setQuantity] = useState(cartItem.quantity) 
    const product = useSelector(getProduct(cartItem.productId))

    useEffect(() => {
        if (cartItem) {
          dispatch(fetchProduct(cartItem.productId));
        }
      }, [dispatch, cartItem]);

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
            options: newSize,
            quantity: cartItem.quantity
    }

    dispatch(updateCartItem(newCartSize))
}

if (!cartItem) return null;
if (!product) return <div className="loader"></div>;
    return (
        <div className="cart-item">
            <Link to={`/products/${product.id}`} > 
                <img src={product.photoUrl} alt={product.name} />
            </Link>

                <div className="cart-item-info"> 

            <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}> 
                    <h1 id="name-link">{product.name}  <span id="name-price">${product.price}</span>   </h1>
            </ Link>
            <br></br>
                    <h2>{product.category}</h2>
                    
                    <h3>{product.color}</h3>
                    
                    <h3></h3>
                    
                    <label id="cart-label"> Size </label>
                    <select className="cart-label-select" onChange={handleSizeChange} style={{border: 'none'}} value={size}>
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
                    <label> &nbsp;&nbsp;&nbsp;Quantity:&nbsp;</label>
                    <input type="number" onChange={handleQuantityChange} value={quantity} style={{border: 'none'}}/>
                    <br></br>
                    <img id="trashcan" src="https://t4.ftcdn.net/jpg/03/01/07/99/360_F_301079914_TDcwbIag3uOp7dwNRWb0bqpfWeOzb6Xu.jpg" onClick={ () => dispatch(deleteCartItem(cartItem.id)) }></img>
            
            </div>
        </div>
    )
}