import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchCartItems } from "../../store/cartItems"
import CartIndexItem from "../CartIndexItem"

export default function CartIndex() {
    const cartItems = useSelector(state => Object.values(state.cartItems))
    const dispatch = useDispatch()

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
        </div>
    )
}