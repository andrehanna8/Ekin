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

export const getSalePrice = (price) => {
    return (price * 0.6).toFixed(2);
};

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
        return ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
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
        <div className="cart-item">
            <Link to={`/products/${product.id}`} > 
                <img src={product.photoUrl} alt={product.name} />
            </Link>

                <div className="cart-item-info"> 

                <Link
        to={`/products/${product.id}`}
        style={{ textDecoration: "none" }}
      >
        <h1 id="name-link">
          {product.name}{" "}
          {isOnSale ? (
            <>
              <span id="name-price" style={{ textDecoration: "line-through" }}>
                ${product.price}
              </span>
              <span id="name-price">${displayPrice}</span>
            </>
          ) : (
            <span id="name-price">${product.price}</span>
          )}
        </h1>
      </Link>
      <br></br>
      <h2>{categoryName}</h2>
                    
                    <h3>{product.color}</h3>
                    
                    <h3></h3>
                    
                    <label id="cart-label"> Size </label>
      <select className="cart-label-select" onChange={handleSizeChange} style={{border: 'none'}} value={size}>
          {sizeOptions.map((option) => (
            <option value={option}>{option}</option>
          ))}
      </select>
                    <label> &nbsp;&nbsp;&nbsp;Quantity:&nbsp;</label>
                    <input type="number" onChange={handleQuantityChange} value={quantity} style={{border: 'none'}}/>
                    <br></br>
                    <img id="trashcan" src="https://t4.ftcdn.net/jpg/03/01/07/99/360_F_301079914_TDcwbIag3uOp7dwNRWb0bqpfWeOzb6Xu.jpg" onClick={ () => dispatch(deleteCartItem(cartItem.id)) }></img>
            
            </div>
        </div>
    )
}