import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCartItems } from "../../store/cartItems";
import CartIndexItem from "../CartIndexItem";
import ThankYouModal from "../ThankYouModal";
import ErrorModal from "../ErrorModal"; // 5. Import the ErrorModal component
import "./CartIndex.css";
import { getSalePrice } from "../CartIndexItem";

export default function CartIndex() {
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false); // 5. Add a new state for the error modal
  const [isLoading, setIsLoading] = useState(true);
  const [showPromoCodeInput, setShowPromoCodeInput] = useState(false)
  const [promoCode, setPromoCode] = useState(""); // 1. Add a new state for the promo code
  const [discountRate, setDiscountRate] = useState(0); // 1. Add a new state for the discount rate
  const products = useSelector((state) => state.products);
  const cartItems = useSelector((state) => Object.values(state.cartItems));
  const dispatch = useDispatch();

  // 4. Update the calculation for totalPrice and totalTax to include the discount rate
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
    return (total * (1 - discountRate)).toFixed(2);
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
    return (total * (1 - discountRate)).toFixed(2);
  };

  const togglePromoCodeInput = () => {
    setShowPromoCodeInput(!showPromoCodeInput);
  };

  // 3. Create a function to handle the apply button click
  const applyPromoCode = () => {
    if (promoCode === "HIREME") {
      setDiscountRate(0.99);
    } else if (promoCode === "") {
      setDiscountRate(0);
    } else {
      setShowErrorModal(true); // 5. Display the error modal when the code is incorrect
    }
  };

  const displayThankYouModal = () => {
    setShowThankYouModal(true);
  };

  useEffect(() => {
    dispatch(fetchCartItems()).then(() => setIsLoading(false));
  }, [dispatch]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      {showThankYouModal && <ThankYouModal />}
      {showErrorModal && ( // 5. Add the error modal
        <ErrorModal
          title="Error"
          message="Sorry,
        the code entered is incorrect or invalid. Please try again, or enter another code. Hint: You should HIREME :)"
errorCode="Code: 4CB0532B"
onClose={() => setShowErrorModal(false)}
/>
)}


  <div className="cart-container">
    <div className="cart-index">
      <h1 id="bag-header">Bag </h1>
      {cartItems.length === 0 ? (
          <div>There are no items in your bag.</div>
        ) : (
          <>
            <ul id="checkout-items">
              {cartItems.map((cartItem) => (
                <>
                  <li id="checkout-item">{<CartIndexItem cartItem={cartItem} />}</li>
                  <br></br>
                  <br></br>
                  <div id="breakline-cart"></div>
                </>
              ))}
            </ul>
          </>
        )}
    </div>
    <div className="cart-total">
      <h1>Summary:</h1>
      <br></br>
      <div className="promo-code-toggle-container" onClick={togglePromoCodeInput}>
  <p className="promo-code-toggle" >
    Do you have a Promo Code?
  </p>
  {showPromoCodeInput ? (
    <i className="fas fa-chevron-up"></i>
  ) : (
    <i  className="fas fa-chevron-down"></i>
  )}
</div>
<div className={`promo-code${showPromoCodeInput ? " show" : ""}`}>
  <div className="input-and-button">
  <input
    id="promo-code-input"
    type="text"
    value={promoCode}
    onChange={(e) => setPromoCode(e.target.value)}
  />
  &nbsp; &nbsp;
  <button id="apply" onClick={applyPromoCode}>Apply</button>
  </div>
</div>
      <br></br>
      <div className="label-value-container">
    <h4>Subtotal:</h4>
    <h4>${totalPrice(cartItems)}</h4>
  </div>
  <br></br>
  <div className="label-value-container">
    <h4>Estimated Shipping & Handling:</h4>
    <h4>Free</h4>
  </div>
  <br></br>
  <div className="label-value-container">
    <h5>Estimated Tax:</h5>
    <h5>${totalTax(cartItems)}</h5>
  </div>
  <br></br>
      <div id="breakline"></div>
      <div className="label-value-container">
    <h6>Total:</h6>
    <h6>${(parseFloat(totalPrice(cartItems)) + parseFloat(totalTax(cartItems))).toFixed(2)}</h6>
  </div>
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