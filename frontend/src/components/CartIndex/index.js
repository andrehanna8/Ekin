import { useSelector, useDispatch } from "react-redux"
import { useEffect, useMemo } from "react"
import { fetchCartItems } from "../../store/cartItems"
import CartIndexItem from "../CartIndexItem"
import { getProduct } from "../../store/products"
import ThankYouModal from "../ThankYouModal"
import "./CartIndex.css"
import { useState } from "react"

export default function CartIndex() {
    const [showThankYouModal, setShowThankYouModal] = useState(false)
    const cartItems = useSelector(state => Object.values(state.cartItems))
    const dispatch = useDispatch()

    const totalPrice = useMemo(() => {
        return cartItems.reduce((acc, cartItem) => {
          const product = getProduct(cartItem.productId);
          if (product) {
            const itemPrice = Number(product.price) * cartItem.quantity;
            return acc + itemPrice;
          }
          return acc;
        }, 0);
      });
    console.log(totalPrice)

    const displayThankYouModal = () => {
        setShowThankYouModal(true);
    }
    
    useEffect(() => {
        dispatch(fetchCartItems())
    }, [dispatch])
    
    return (
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
                    <h3>Subtotal: { totalPrice }</h3>
                    <br></br>
                    <h4>Estimated Shipping & Handling: Free</h4>
                    <br></br>
                    <h5>Estimated Tax: </h5>
                    <br></br>
                    <div id="breakline"></div>
                    <h6>Total: </h6>
                    <div id="breakline"></div>
                    <br></br>
                    <button className="checkout-button" onClick={displayThankYouModal} >Checkout</button>
                </div>
            </div>
        </>
    )
}