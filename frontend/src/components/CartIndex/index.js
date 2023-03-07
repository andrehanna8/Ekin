import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchCartItems } from "../../store/cartItems"
import CartIndexItem from "../CartIndexItem"
import "./CartIndex.css"

export default function CartIndex() {
    const cartItems = useSelector(state => Object.values(state.cartItems))
    const dispatch = useDispatch()

    const sendBackToHomePage = () => {
        window.location.href = "/"
    }
    
    useEffect(() => {
        dispatch(fetchCartItems())
    }, [dispatch])
    
    return (
        <div className="cart-index">
            <ul>
                {cartItems.map(cartItem => 
                    ( <li>{ <CartIndexItem cartItem={cartItem} /> }</li> ))
                }

            </ul>

            <div className="cart-total">
                <h1>Cart Total</h1>
                <h2>Subtotal</h2>
                <h2>Shipping</h2>
                <h2>Tax</h2>
                <h2>Total</h2>
                <button onClick={sendBackToHomePage}>Checkout</button>
            </div>
        </div>
    )
}