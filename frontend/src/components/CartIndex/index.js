import { useSelector, useDispatch } from "react-redux"
import { startTransition, useEffect, useMemo } from "react"
import { fetchCartItems } from "../../store/cartItems"
import CartIndexItem from "../CartIndexItem"
import { getProduct } from "../../store/products"
import ThankYouModal from "../ThankYouModal"
import "./CartIndex.css"
import { useState } from "react"

export default function CartIndex() {
    const [showThankYouModal, setShowThankYouModal] = useState(false)
    const products = useSelector( state => state.products)
    const cartItems = useSelector(state => Object.values(state.cartItems))
    const dispatch = useDispatch()

    
    const totalPrice = (items) => {
        let total = 0
        console.log(items)
        items.forEach(item => {
            const temp = products[item.productId] 
            total += temp.price * item.quantity
        })
        return Math.floor(total)
    }

    const totalTax = (items) => {
        let total = 0
        items.forEach(item => {
            const temp = products[item.productId]
            total += temp.price * item.quantity * 0.08
        })
        return total
    }



    
    const displayThankYouModal = () => {
        setShowThankYouModal(true);
    }
    
    useEffect(() => {
        dispatch(fetchCartItems())
    }, [dispatch])
    
    
    return  cartItems ? (
        <>
            {showThankYouModal && <ThankYouModal/>}
            <h1 id="bag-header">Bag &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Summary</h1>
            <div className="cart-index">
                <ul id="checkout-items">
                    {cartItems.map(cartItem => 
                        ( 
                            <>
                                <li 
                                id="checkout-item">{ <CartIndexItem cartItem={cartItem} />}
                                </li> 
                                <div id="breakline-cart"></div>
                            </>
                        )
                        )
                    }
    
                </ul>
    
                <div className="cart-total">
                    {/* <h1>Summary</h1> */}
                    <br></br>
                    <h3>Subtotal: ${totalPrice(cartItems)}</h3>
                    <br></br>
                    <h4>Estimated Shipping & Handling: Free</h4>
                    <br></br>
                    <h5>Estimated Tax: ${totalTax(cartItems)} </h5>
                    <br></br>
                    <div id="breakline"></div>
                    <h6>Total: ${ totalPrice(cartItems) +  totalTax(cartItems) } </h6>
                    <div id="breakline"></div>
                    <br></br>
                    <button className="checkout-button" onClick={displayThankYouModal} >Checkout</button>
                </div>
            </div>
        </>
    ) : null
}