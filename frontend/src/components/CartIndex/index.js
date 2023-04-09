import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCartItems } from "../../store/cartItems";
import CartIndexItem from "../CartIndexItem";
import ThankYouModal from "../ThankYouModal";
import "./CartIndex.css";
import { getSalePrice } from "../CartIndexItem";


export default function CartIndex() {
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const products = useSelector((state) => state.products);
  const cartItems = useSelector((state) => Object.values(state.cartItems));
  const dispatch = useDispatch();
  const totalPrice = (items) => {
    let total = 0;
    items.forEach((item) => {
      const product = products[item.productId];
      if (product) {
        const isOnSale = product.category.includes("Sale");
        const price = isOnSale ? parseFloat(getSalePrice(product.price)) : product.price;
        total += price * item.quantity;
      }
    });
    return total.toFixed(2);
  };
  
  const totalTax = (items) => {
    let total = 0;
    items.forEach((item) => {
      const product = products[item.productId];
      if (product) {
        const isOnSale = product.category.includes("Sale");
        const price = isOnSale ? parseFloat(getSalePrice(product.price)) : product.price;
        total += price * item.quantity * 0.08;
      }
    });
    return total.toFixed(2);
  };
  

  const displayThankYouModal = () => {
    setShowThankYouModal(true);
  };

  useEffect(() => {
    dispatch(fetchCartItems()).then(() => setIsLoading(false));
  }, [dispatch]);

  return isLoading ? (
    <div>Loading...</div>
  ) : cartItems.length > 0 ? (
    <>
      {showThankYouModal && <ThankYouModal />}
      <h1 id="bag-header">Bag </h1>
      <div className="cart-index">
        <ul id="checkout-items">
          {cartItems.map((cartItem) => (
            <>
              <li id="checkout-item">
                {<CartIndexItem cartItem={cartItem} />}
              </li>
              <div id="breakline-cart"></div>
            </>
          ))}
        </ul>

        <div className="cart-total">
        <h1>Summary:</h1>
          <br></br>
          <h3>Subtotal: ${totalPrice(cartItems)}</h3>
          <br></br>
          <h4>Estimated Shipping & Handling: Free</h4>
          <br></br>
          <h5>Estimated Tax: ${totalTax(cartItems)} </h5>
          <br></br>
          <div id="breakline"></div>
          <h6>Total: ${totalPrice(cartItems) + totalTax(cartItems)} </h6>
          <div id="breakline"></div>
          <br></br>
          <button className="checkout-button" onClick={displayThankYouModal}>
            Checkout
          </button>
        </div>
      </div>
    </>
  ) : (
    <>
      {showThankYouModal && <ThankYouModal />}
      <h1 id="bag-header">Bag </h1>
      <div className="cart-index">
        <ul id="checkout-items">
          {cartItems.map((cartItem) => (
            <>
              <li id="checkout-item">
                {<CartIndexItem cartItem={cartItem} />}
              </li>
              <div id="breakline-cart"></div>
            </>
          ))}
        </ul>

        <div className="cart-total">
            <h1>Summary:</h1>
          <br></br>
          <h3>Subtotal: ${totalPrice(cartItems)}</h3>
          <br></br>
          <h4>Estimated Shipping & Handling: Free</h4>
          <br></br>
          <h5>Estimated Tax: ${totalTax(cartItems)} </h5>
          <br></br>
          <div id="breakline"></div>
          <h6>Total: ${totalPrice(cartItems) + totalTax(cartItems)} </h6>
          <div id="breakline"></div>
          <br></br>
          <button className="checkout-button" onClick={displayThankYouModal}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
