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
import { format } from "date-fns";

export const getSalePrice = (price) => {
    return (price * 0.6).toFixed(2);
};

const getDeliveryDate = () => {
  const currentDate = new Date();
  const deliveryDate = new Date(currentDate);
  deliveryDate.setDate(currentDate.getDate() + 7);
  return format(deliveryDate, "EEE, MMM d");
};

const deliveryDate = getDeliveryDate();

const getRandomZipCode = () => {
  const randomZip = 90000 + Math.floor(Math.random() * 10000);
  return randomZip;
};

const randomZipCode = getRandomZipCode();

export default function CartIndexItem({cartItem}) {

    const dispatch = useDispatch();
    const [size, setSize] = useState(cartItem.options)
    const [quantity, setQuantity] = useState(cartItem.quantity) 
    const product = useSelector(getProduct(cartItem.productId))

    const isOnSale = useMemo(() => product && product.category.includes("Sale"), [product]);
    const categoryName = useMemo(() => {
      if (product && isOnSale) {
        return product.category.replace("Sale ", "");
      }
      return product && product.category;
    }, [product, isOnSale]);
    

    const getSizeOptions = (category) => {
      if (!category) {
        return [];
      }
    
      if (category.includes("Shoe")) {
        return [
          "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5",
          "10", "10.5", "11", "11.5", "12", "12.5", "13", "14"
        ];
      } else if (category.includes("Accessories")) {
        return ["OS"];
      } else if (category.includes("Tops") || category.includes("Bottoms")) {
        return ["XS", "S", "M", "L", "XL"];
      } else {
        return []; // Return an empty array in case no condition matches
      }
    };
    

    const sizeOptions = useMemo(() => getSizeOptions(categoryName), [categoryName]);

    const displayPrice = product ? (isOnSale ? getSalePrice(product.price) : product.price) : null;

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

    <div className="cart-item-wrapper">
      <div className="cart-item-container"> 

        <div className="left-side-cart">
            <Link to={`/products/${product.id}`} > 
                <img src={product.photoUrl} alt={product.name} />
            </Link>
      </div>

      <div className="right-side-cart">
            <div className="cart-item-info"> 
                <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
                  <div className="name-and-price" >
                    <div className="name">
                      {product.name}{" "}
                    </div>

                    <div className="price">
                      <h1>
                        {isOnSale ? (
                          <>
                            <span id="sale-price" style={{ textDecoration: "line-through" }}>
                              ${product.price} 
                            </span>&nbsp; &nbsp;
                            <span id="display-price">${displayPrice}</span>
                          </>
                        ) : (
                          <span >${product.price}</span>
                        )}
                      </h1>
                    </div>
                  </div>
                </Link>
                <br></br>
                <h4 id="cat-name">{categoryName}</h4>
                <br></br>
                    <h4 id="prod-color">{product.color}</h4>
                    <br></br>
                    <div className="size-and-quantity"> 
                      <div className="size">
                        <label id="cart-label"> Size </label>
                        <select className="cart-label-select" onChange={handleSizeChange} style={{border: 'none'}} value={size}>
                            
                            {sizeOptions.map((option) => (
                              <option value={option}>{option}</option>
                            ))}
                        </select>
                      </div>
                      &nbsp;
                      <div className="quantity">
                        <label> Quantity:&nbsp;</label> &nbsp;
                        <select value={quantity} onChange={handleQuantityChange} style={{ border: 'none' }}>
                          {[...Array(10)].map((_, index) => (
                            <option key={index} value={index + 1}>
                              {index + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    {/* <img id="trashcan" src="https://t4.ftcdn.net/jpg/03/01/07/99/360_F_301079914_TDcwbIag3uOp7dwNRWb0bqpfWeOzb6Xu.jpg" ></img> */}
                    <i  id="trash-icon" onClick={ () => dispatch(deleteCartItem(cartItem.id)) } class="fa-regular fa-trash-can"></i>
            </div>
      </div>
    </div>

    <div className="under-cart-item">
        <div className="under-cart-item-left">
            <div className="UC-ship">
              <h1>Free Shipping</h1>
              <h1>Arrives by <span id="bold">{deliveryDate}</span>  to <span id="bold">{randomZipCode}</span></h1>
            </div>
            <br></br>
            <div className="UC-pick">
            <h1>Free Pickup</h1>
            <h1>Available at Nike by San Ramon</h1>
          </div>
        </div>
    </div>  
</div>
    )
}